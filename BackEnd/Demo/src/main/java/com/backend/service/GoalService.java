package com.backend.service;

import java.util.List;

import com.backend.dto.GoalVO;


public interface GoalService {
	public void insertGoal(GoalVO newgoal);
	public String newGoalID();
	public List<GoalVO> getGoalList(String userid);
	public boolean updateGoal(GoalVO goal);
	public boolean deleteGoal(String goalid);
	public void selectTargetDate(String userid, String start, String end);
}
