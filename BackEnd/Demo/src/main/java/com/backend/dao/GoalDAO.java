package com.backend.dao;

import java.util.List;

import com.backend.dto.GoalVO;

public interface GoalDAO {
	
	public int insertGoal(GoalVO goal);
	public String newGoalID();

}
