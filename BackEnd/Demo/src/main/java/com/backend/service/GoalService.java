package com.backend.service;

import java.util.List;

import com.backend.dto.GoalVO;


public interface GoalService {
	public void insertGoal(GoalVO newgoal);
	public String newGoalID();
	public List<GoalVO> getGoalList(String userid);
}
