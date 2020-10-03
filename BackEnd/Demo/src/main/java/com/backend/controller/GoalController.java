package com.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.backend.dto.DailyVO;
import com.backend.dto.GoalVO;
import com.backend.service.GoalService;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequestMapping("/goal")
public class GoalController {
	
	@Autowired
	private GoalService goalService;

	@RequestMapping(value = "/getList", method=RequestMethod.GET, produces="application/json;charset=utf-8")
	public @ResponseBody List<GoalVO> getGoalList(@RequestParam("userid") String userid) {
		
		return goalService.getGoalList(userid);
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public @ResponseBody String newGoal(@RequestBody GoalVO newgoal) {
		
		String newgoalid = goalService.newGoalID();
		System.out.println(newgoalid);
		
		int start=0;
		for(int i=0; i<newgoalid.length();i++) {
			if(newgoalid.charAt(i)=='-') {
				start = i+1;
			}
		}
		newgoalid = newgoalid.substring(start, newgoalid.length());
		int temp = Integer.parseInt(newgoalid)+1;
		newgoalid = "goal-"+String.valueOf(temp);
		newgoal.setGoalid(newgoalid);
		
		goalService.insertGoal(newgoal);
	
		return "new goal accepted";
	}
	
	@RequestMapping(value="/targetDate", method=RequestMethod.GET)
	public @ResponseBody String getListByDate(@RequestParam("start") String start, @RequestParam("end") String end){
		
		return "bb";
		
	}
	
	
}
