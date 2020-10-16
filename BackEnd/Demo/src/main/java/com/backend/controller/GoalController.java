package com.backend.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.backend.dto.GoalVO;
import com.backend.dto.UserVO;
import com.backend.service.GoalService;
import com.backend.service.UserService;
import com.google.gson.Gson;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequestMapping("/goal")
public class GoalController {
	
	@Autowired
	private GoalService goalService;
	@Autowired
	private UserService userService;
	private String userId;
	private HttpHeaders responseHeaders;

	
	public HttpHeaders getHeader() {
		responseHeaders = new HttpHeaders();
		responseHeaders.add("Content-Type", "text/plain; charset=UTF-8");
		
		return responseHeaders; 
	}
	

	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<?> getGoalList(HttpServletRequest request) throws Exception {
		//사용자의 목표 조회
		
		String param = request.getParameter("userId");
		
		if (param != null) {
			//파라미터로 명시해서 넘겨준 경우 : 로그인 안 되어 있음. 
			userId=param;
			
		}else {
			//로그인 되어 있는 경우.
			
			userId=(String)request.getSession().getAttribute("userId");
			
			if (userId == null)
				return new ResponseEntity<String>("로그인 해주세요.", getHeader(), HttpStatus.BAD_REQUEST);
			
			
			
		}
		
		List<GoalVO> result = goalService.getGoalList(userId);
		
		if(result == null)
			return new ResponseEntity<String>("없는 사용자입니다.", getHeader(), HttpStatus.UNAUTHORIZED);
		
		return new ResponseEntity<List<GoalVO>>(result , HttpStatus.OK);
		
		
		
	}
	
	@RequestMapping(params="goalId", method=RequestMethod.PUT)
	public ResponseEntity<?> updateGoal(HttpServletRequest request, @RequestBody GoalVO goal){
		//목표 수정
		
		
		String goalid = (String)request.getParameter("goalId");
		String userid = goal.getUserId();
		
		if(userid == null) {
			userid = (String)request.getSession().getAttribute("userid");
		}
		
		goal.setUserId(userid);
		goal.setGoalId(goalid);
		
		if(goalService.updateGoal(goal)) {
			return new ResponseEntity<String>(goalid,HttpStatus.CREATED);
		}
		return new ResponseEntity<String>("goalId가 없습니다. goalId를 지정해주세요.", HttpStatus.BAD_REQUEST);
		
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<?> newGoal(HttpServletRequest request , @RequestBody GoalVO newgoal) {
		//새로운 목표 생성
		
		userId = newgoal.getUserId();
		
		
		if(userId == null) {
			//로그인 되어 있는 경우. 
			
			
			userId = request.getParameter("userId");
			
		}
		
		System.out.println(userId);
		System.out.println(newgoal.getTitle());
		String newgoalid = "goal"+goalService.newGoalID();
		
		
		if(userId == null) {
			return new ResponseEntity<String>("userlId를 지정하거나, 로그인해주세요.",getHeader(), HttpStatus.UNAUTHORIZED);
		}
		
		newgoal.setUserId(userId);
		newgoal.setGoalId(newgoalid);
		
		if(goalService.checkUserId(userId)) {
			goalService.insertGoal(newgoal);
			return new ResponseEntity<String>("새로운 목표 생성 : "+newgoalid, getHeader(), HttpStatus.OK);
		}else {
			return new ResponseEntity<String>("없는 사용자입니다.",getHeader(), HttpStatus.BAD_REQUEST);
		}
		
		
	
		
	}
	
	@RequestMapping(method=RequestMethod.DELETE)
	public ResponseEntity<?> removeGoal(HttpServletRequest request) {
		//목표를 삭제
		
		String goalid = request.getParameter("goalId");
		if(goalService.deleteGoal(goalid)) {
			return new ResponseEntity<String>(goalid+"가 정상적으로 삭제되었습니다.", getHeader(), HttpStatus.OK);
		}
		return new ResponseEntity<String>("goalId가 없습니다.", getHeader(), HttpStatus.BAD_REQUEST);
		
	}
	
	@RequestMapping(value="/hashtag", params="name", method=RequestMethod.GET)
	public @ResponseBody JSONArray goalsByHashtag(HttpServletRequest request) throws Exception{
		//해시태그별로 목표 조회 
		
		String hashtag = request.getParameter("name");
		List<GoalVO> goals = goalService.goalByHashtag(hashtag);
		
		JSONArray dataSet = new JSONArray();
		JSONParser parser = new JSONParser();
		JSONObject goal;
		Gson gson = new Gson();
		
		for(int i=0; i< goals.size(); i++) {
			
			goal = new JSONObject();
			String str = gson.toJson(goals.get(i));
			goal = (JSONObject)parser.parse(str);
			UserVO tempUser = userService.getUserById(goals.get(i).getUserId());
			goal.put("userName", tempUser.getUserName());
			
			dataSet.add(goal);
			
		}
		
		
		
		return dataSet;
	}
	
	@RequestMapping(value = "/goalSet/{goalId}", method=RequestMethod.GET)
	public ResponseEntity<?> getGoalInfo(@PathVariable(name = "goalId") String goalId) {
		//해당 목표에 대한 정보 조회 
		
		
		GoalVO goalInfo = goalService.getGoalInfo(goalId);
		
		if (goalInfo == null) {
			return new ResponseEntity<String>("goalId가 없습니다.", getHeader(),HttpStatus.BAD_REQUEST);
		}
		else
			return new ResponseEntity<GoalVO>(goalInfo, HttpStatus.OK);
		
	}
	
}
