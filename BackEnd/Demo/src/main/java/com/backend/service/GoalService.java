package com.backend.service;

import java.util.List;

import com.backend.dto.GoalVO;


public interface GoalService {
	public void insertGoal(GoalVO newgoal);
	public String newGoalID();
	public List<GoalVO> getGoalList(String userid);
	public List<GoalVO> getById(String id);
	public boolean updateGoal(GoalVO goal);
	public boolean deleteGoal(String goalid);
	public void selectTargetDate(String userid, String start, String end);
	public List<GoalVO> goalByHashtag(String name);
	public boolean checkUserId(String id);
	public String getTermGoal(String id);
	public GoalVO getGoalInfo(String id);
	
	
}
