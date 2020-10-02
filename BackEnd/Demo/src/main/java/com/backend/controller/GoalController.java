package com.backend.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.backend.dto.GoalVO;
import com.backend.service.GoalService;

import lombok.extern.slf4j.Slf4j;

import java.sql.Date;

@Controller
@Slf4j
@RequestMapping("/goal")
public class GoalController {
	
	@Autowired
	private GoalService goalService;

	@RequestMapping(value = "/getList", method=RequestMethod.GET)
	public @ResponseBody String getGoalList(@RequestParam("userid") String userid, Model model) {
		model.addAttribute("goalList", "사용자"+userid+"님의 목표 리스트 입니다.");		
		return "";
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public @ResponseBody String newGoal(@RequestBody GoalVO newgoal) {
		
		String newgoalid = goalService.newGoalID();
		newgoalid = newgoalid.substring(newgoalid.length()-3, newgoalid.length());
		int temp = Integer.parseInt(newgoalid)+1;
		newgoalid = "goal-"+String.valueOf(temp);
		newgoal.setGoalid(newgoalid);
		
		goalService.insertGoal(newgoal);
	
		return "new goal accepted";
	}
	
	
}
