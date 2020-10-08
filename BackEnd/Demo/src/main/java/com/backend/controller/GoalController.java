package com.backend.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
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

	@RequestMapping(params="userid", method=RequestMethod.GET, produces="application/json;charset=utf-8")
	public ResponseEntity<?> getGoalList(@RequestParam("userid") String userid) {
		//사용자의 목표 조회
		
		List<GoalVO> result = goalService.getGoalList(userid);
		
		if (result == null) {
			return new ResponseEntity<String>("userid가 없습니다.", HttpStatus.BAD_REQUEST);
		}
		else
			return ResponseEntity.status(HttpStatus.OK).body(result);
		
		
		
		
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
			return new ResponseEntity<String>(goalid+"가 정상적으로 수정되었습니다.",HttpStatus.CREATED);
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
			return new ResponseEntity<String>("새로운 목표 생성 : "+newgoalid, HttpStatus.OK);
		}else {
			return new ResponseEntity<String>("userlId가 없습니다.", HttpStatus.BAD_REQUEST);
		}
		
		
	
		
	}
	
	@RequestMapping(value="/targetDate", method=RequestMethod.GET)
	public @ResponseBody String getListByDate(HttpServletRequest request){
		
		String start, end, userid;
		start = request.getParameter("start");
		end = request.getParameter("end");
		userid = request.getParameter("userid");
		
		
		if(start == null && end == null) {
			//특정 시간을 지정하지 않은 경우
			
			Calendar cal = Calendar.getInstance();
		    cal.setTime(new Date());
		    DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		    start = df.format(cal.getTime());

		    cal.add(Calendar.DATE, -7);
		    end = df.format(cal.getTime());
		    System.out.print(start+", "+end);
		    

			
		}else {
			
		}
			
		
		
		
		
		return "bb";
		
	}
	
	@RequestMapping(method=RequestMethod.DELETE)
	public ResponseEntity<?> removeGoal(HttpServletRequest request) {
		//목표를 삭제하는 메소드
		
		String goalid = request.getParameter("goalId");
		if(goalService.deleteGoal(goalid)) {
			return new ResponseEntity<String>(goalid+"가 정상적으로 삭제되었습니다.", HttpStatus.OK);
		}
		return new ResponseEntity<String>("goalId가 없습니다.", HttpStatus.BAD_REQUEST);
		
	}
	
	@RequestMapping(value="/hashtag", params="name", method=RequestMethod.GET)
	public @ResponseBody List<GoalVO> goalsByHashtag(HttpServletRequest request) {
		String hashtag = request.getParameter("name");
		return goalService.goalByHashtag(hashtag);
	}
	
	
}
