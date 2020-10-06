package com.backend.dao;

import java.util.List;

import com.backend.dto.GoalVO;

public interface GoalDAO {
	
	public int insertGoal(GoalVO goal);
	public String newGoalID();
	public List<GoalVO> getGoalList(String userid);
	public boolean checkGoalId(String goalid);
	public void updateGoal(GoalVO goal);
	public void deleteGoal(String goalid);
	public void updateNewGoal(int newGoal);
	public String newHashId();
	public void updateHashId(int id);
	public void newHashtags(List<String> tags, String goalid);
	public List<GoalVO> goalByHashtag(String name);
	
	
	
	

}
