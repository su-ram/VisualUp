package com.backend.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.backend.dto.DailyVO;
import com.backend.dto.GoalVO;
import com.backend.dto.UserVO;
import com.backend.service.DailyService;
import com.backend.service.GoalService;
import com.backend.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequestMapping(value="/graph")
public class GraphController {
	
	String userId, userName, goalId;
	@Autowired
	GoalService goalService;
	@Autowired
	UserService userService;
	@Autowired
	DailyService dailyService;
	private HttpHeaders responseHeaders;
	
	@RequestMapping(value="/goal",params="goalId", method=RequestMethod.GET)
	public ResponseEntity<?> goalGraphData(HttpServletRequest request) {
		// 특정 목표에 대한 데일리 체크 
		
		
		goalId = request.getParameter("goalId");
		
		if(goalService.getGoalInfo(goalId)!=null) {
		try{
		return new ResponseEntity<JSONArray>(createJSONData(goalService.getById(goalId)), HttpStatus.OK);
		
		}catch(Exception e) {
			
		}
		}
		
		
		return new ResponseEntity<String>("해당 goalId가 존재하지 않습니다.", getHeader(), HttpStatus.UNAUTHORIZED);
		
		
		
	}
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<?> getGraphData(HttpServletRequest request) {
		//그래프 데이터 요청. 모든 목표들에 대해서. 
		
		userId = request.getParameter("userId");
		
		Cookie[] ck = request.getCookies();
		
		for(int i=0; i< ck.length; i++) {
			
		}
		
		if(userId == null) {
			userId = (String)request.getSession().getAttribute("userid");
			
			if(userId == null)
				return new ResponseEntity<String>("userId를 지정하거나 로그인해주세요.", getHeader(), HttpStatus.BAD_REQUEST);
		}
		
		
		try {
			UserVO user = userService.getUserById(userId);
			if (user != null) {
				return new ResponseEntity<JSONObject>(createGraphData(user),HttpStatus.OK);
			}
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		return new ResponseEntity<String>("없는 사용자입니다.", getHeader(), HttpStatus.UNAUTHORIZED);
		
	}
	public HttpHeaders getHeader() {
		responseHeaders = new HttpHeaders();
		responseHeaders.add("Content-Type", "text/plain; charset=UTF-8");
		
		return responseHeaders; 
	}
	public JSONArray createJSONData(List<GoalVO> goals) throws Exception{
		
		JSONArray array = new JSONArray();
		
		JSONObject goal;
		String goalid;
		List<DailyVO> dailys;
		UserVO user;
		
		for(int i=0; i<goals.size(); i++) {
			
			goal = new JSONObject();
			goalid = goals.get(i).getGoalId();
			user = userService.getUserById(goals.get(i).getUserId());
			
			
			goal.put("goalId", goalid);
			goal.put("title", goals.get(i).getTitle());
			goal.put("startDate", goals.get(i).getStartDate());
			goal.put("endDate", goals.get(i).getEndDate());
			goal.put("termGoal", goals.get(i).getTermGoal());
			goal.put("term", goals.get(i).getTerm());
			goal.put("hashtags", goals.get(i).getHashtags());
			goal.put("open", goals.get(i).isOpen());
			goal.put("template", goals.get(i).getTemplate());
			goal.put("graphColor", goals.get(i).getGraphColor());
			goal.put("userName",user.getUserName());
			goal.put("userId", user.getUserId());
			
			//여기서부터 데일리 내용들 입력 
			
			dailys = dailyService.getByGoal(goalid);
			JSONArray dailySet = new JSONArray();
			JSONObject daily;
			String termGoal;
			
			for(int j=0; j<dailys.size(); j++) {
				
				daily = new JSONObject();
				daily.put("date", dailys.get(j).getTodayDate());
				
				
				float value = dailys.get(j).getStars();
				value = (value/5)*100;
				
				daily.put("dailyId", dailys.get(j).getDailyId());
				daily.put("value", value);
				daily.put("whatIdone", dailys.get(j).getWhatIdone());
				dailySet.add(daily);
				
			}
			
			goal.put("dailySet", dailySet);
			array.add(goal);
			
			
			
	}
		return array;
	}
	
	@RequestMapping(value="/missingDaily", params="goalId", method=RequestMethod.GET)
	public void missingDaily(String goalId) {
		
		
		
		GoalVO goal = goalService.getGoalInfo(goalId);
		List<DailyVO> dailys = dailyService.getByGoal(goalId);
		LocalDate startdate = LocalDate.parse(goal.getStartDate());
		LocalDate cur = startdate.plusDays(-1);
		LocalDate endDate = LocalDate.parse(goal.getEndDate());
		
		int i =0;
		int term = goal.getTerm();
		LocalDate dailyDate;
		List<DailyVO> dataSet = new ArrayList<>();
		DailyVO daily;
		
		System.out.println("start date : "+startdate.toString());
		System.out.println("end date : "+endDate.toString());
		
		while(cur.isBefore(endDate)) {
			
			
			dailyDate = LocalDate.parse(dailys.get(i).getTodayDate());
			if(dailyDate.isAfter(cur) && dailyDate.isBefore(cur.plusDays(term))){
				//주기 안에 해당하는 데일리 체크라면 
				daily = dailys.get(i);
				i++;
				
			}else {
				//주기에 해당하지 않으면 빈 객체 생성해서 넣어줌. 
				daily = dummyDaily();
				daily.setTodayDate(cur.plusDays(1).toString());
				
			}
			
			System.out.println("dailyDate : "+daily.getTodayDate());
			
			dataSet.add(daily);
			
			
			cur = cur.plusDays(term);
			
		}
		
		System.out.println();
		for(i=0; i<dataSet.size(); i++) {
			System.out.println(dataSet.get(i).getTodayDate()+", wahtIdone : "+dataSet.get(i).getWhatIdone());
		}
		
		
		
	}
	
	public DailyVO dummyDaily() {
		
		DailyVO daily = new DailyVO();
		daily.setStars(0);
		daily.setWhatIdone("");
		
		return daily;
		
	}
	public JSONObject createGraphData(UserVO user) throws Exception{
		
		JSONObject data = new JSONObject();
		userName = user.getUserName();
		List<GoalVO> goals = goalService.getGoalList(user.getUserId());
		
		data.put("userId", user.getUserId());
		data.put("userName",userName);
		
		JSONArray array = createJSONData(goals);
		data.put("goals", array);
		
		return data;
		
			
		}
		
		
		
	}
	
	
	
	
	
	
	
	

