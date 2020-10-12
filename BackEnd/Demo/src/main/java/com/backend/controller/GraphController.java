package com.backend.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

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
	
	
	@RequestMapping(value="/goal",params="goalId", method=RequestMethod.GET)
	public @ResponseBody JSONArray goalGraphData(HttpServletRequest request) {
		// 특정 목표에 대한 데일리 체크 
		
		
		goalId = request.getParameter("goalId");
		
		try{
		return createJSONData(goalService.getById(goalId));
		
		}catch(Exception e) {
			
		}
		return null;
		
		
		
	}
	@RequestMapping(method=RequestMethod.GET)
	public @ResponseBody JSONObject getGraphData(HttpServletRequest request) {
		//그래프 데이터 요청. 모든 목표들에 대해서. 
		
		userId = request.getParameter("userId");
		
		if(userId == null) {
			userId = (String)request.getSession().getAttribute("userid");
		}
		
		
		try {
			UserVO user = userService.getUserById(userId);
			if (user != null) {
				return createGraphData(user);
			}
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		return null;
		
	}
	
	public JSONArray createJSONData(List<GoalVO> goals) throws Exception{
		
		JSONArray array = new JSONArray();
		
		JSONObject goal;
		String goalid;
		List<DailyVO> dailys;
		
		for(int i=0; i<goals.size(); i++) {
			
			goal = new JSONObject();
			goalid = goals.get(i).getGoalId();
			
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
	
	
	
	
	
	
	
	

