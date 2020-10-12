package com.backend.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.backend.dto.GoalVO;
import com.backend.service.GoalService;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequestMapping("/goal")
public class GoalController {
	
	@Autowired
	private GoalService goalService;
	
	private HttpHeaders responseHeaders;

	
	public HttpHeaders getHeader() {
		responseHeaders = new HttpHeaders();
		responseHeaders.add("Content-Type", "text/plain; charset=UTF-8");
		
		return responseHeaders; 
	}
	@RequestMapping(params="userid", method=RequestMethod.GET)
	public ResponseEntity<?> getGoalList(@RequestParam("userid") String userid) {
		//사용자의 목표 조회
		
		List<GoalVO> result = goalService.getGoalList(userid);
		
		if (result == null) {
			
			return new ResponseEntity<String>("userid가 없습니다.",getHeader(), HttpStatus.BAD_REQUEST);
		}
		else {
			
			return new ResponseEntity<List<GoalVO>>(result , HttpStatus.OK);
		
		}
		
		
	}
	
	@RequestMapping(method=RequestMethod.PUT)
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
			return new ResponseEntity<String>(goalid+"가 정상적으로 수정되었습니다.",getHeader(),HttpStatus.CREATED);
		}
		return new ResponseEntity<String>("goalId가 없습니다.", HttpStatus.BAD_REQUEST);
		
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<?> newGoal(HttpServletRequest request , @RequestBody GoalVO newgoal) {
		//새로운 목표 생성
		
		
		String userid = newgoal.getUserId();
		String newgoalid = "goal"+goalService.newGoalID();
		
		if(userid == null) {
			
			userid = (String)request.getSession().getAttribute("userid");
			newgoal.setUserId(userid);
		}
		
		newgoal.setGoalId(newgoalid);
		
		if(goalService.checkUserId(userid)) {
			goalService.insertGoal(newgoal);
			return new ResponseEntity<String>("새로운 목표 생성 : "+newgoalid, getHeader(), HttpStatus.OK);
		}else {
			return new ResponseEntity<String>("userlId가 없습니다.", HttpStatus.BAD_REQUEST);
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
	public @ResponseBody List<GoalVO> goalsByHashtag(HttpServletRequest request) {
		//해시태그별로 목표 조회 
		
		String hashtag = request.getParameter("name");
		return goalService.goalByHashtag(hashtag);
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
