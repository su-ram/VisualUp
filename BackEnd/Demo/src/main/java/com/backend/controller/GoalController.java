package com.backend.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
	public @ResponseBody List<GoalVO> getGoalList(@RequestParam("userid") String userid) {
		
		return goalService.getGoalList(userid);
	}
	
	@RequestMapping(method=RequestMethod.PUT)
	public ResponseEntity<Void> updateGoal(HttpServletRequest request, @RequestBody GoalVO goal){
		
		String userid = (String)request.getSession().getAttribute("userid");
		goal.setUserId(userid);
		
		if(goalService.updateGoal(goal)) {
			return new ResponseEntity<>(HttpStatus.CREATED);
		}
		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public @ResponseBody String newGoal(HttpServletRequest request , @RequestBody GoalVO newgoal) {
		
		String userid = (String)request.getSession().getAttribute("userid");
		String newgoalid = "goal"+goalService.newGoalID();
		
		newgoal.setUserId(userid);
		newgoal.setGoalId(newgoalid);
		
		goalService.insertGoal(newgoal);
	
		return "new goal accepted"+" "+ request.getSession();
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
	
	@RequestMapping(params="goalid", method=RequestMethod.DELETE)
	public ResponseEntity<Void> removeGoal(@RequestParam("goalid") String goalid) {
		
		if(goalService.deleteGoal(goalid)) {
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		
	}
	
	@RequestMapping(value="/hashtag", params="name", method=RequestMethod.GET)
	public @ResponseBody List<GoalVO> goalsByHashtag(HttpServletRequest request) {
		String hashtag = request.getParameter("name");
		return goalService.goalByHashtag(hashtag);
	}
	
	
}
