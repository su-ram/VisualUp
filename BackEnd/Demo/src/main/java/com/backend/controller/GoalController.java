package com.backend.controller;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.backend.dto.GoalVO;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequestMapping("/goal")
public class GoalController {

	@RequestMapping(value = "/getList", method=RequestMethod.GET)
	public @ResponseBody ArrayList<GoalVO> getGoalList(@RequestParam("userid") String userid, Model model) {
		model.addAttribute("goalList", "사용자"+userid+"님의 목표 리스트 입니다.");
		
		GoalVO goal = new GoalVO();
		goal.setUserId(userid);
		goal.setGoalContent("파이썬 문법 공부");
		goal.setGoalId("goal000");
		goal.setGoalTitle("파이썬 문법");
		
		GoalVO goal2 = new GoalVO();
		goal2.setUserId(userid);
		goal2.setGoalContent("오라클 디비는 해본 적이 없어서 이번 기회에 공부중 ㅎ");
		goal2.setGoalId("goal001");
		goal2.setGoalTitle("오라클 디비 공부");
		
		ArrayList<GoalVO> goallist = new ArrayList<GoalVO>();
		goallist.add(goal);
		goallist.add(goal2);
		
		return goallist;
	}
	
	
}
