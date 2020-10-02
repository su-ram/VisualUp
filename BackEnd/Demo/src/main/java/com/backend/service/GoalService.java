package com.backend.service;

import org.springframework.stereotype.Service;

import com.backend.dto.GoalVO;


public interface GoalService {
	public void insertGoal(GoalVO newgoal);
	public String newGoalID();
}
