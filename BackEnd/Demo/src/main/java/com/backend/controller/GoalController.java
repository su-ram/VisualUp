package com.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequestMapping("/goal")
public class GoalController {

	@RequestMapping(value = "/getList", method=RequestMethod.GET)
	public String getGoalList(@RequestParam("userid") String userid, Model model) {
		model.addAttribute("goalList", "사용자"+userid+"님의 목표 리스트 입니다.");
		return "goal/goalList";
	}
}
