package com.backend.dao;

import java.util.List;

import com.backend.dto.DailyVO;

public interface DailyDAO {

	public void newDaily(DailyVO daily);
	public String newDailyId();
	public void updateNewId(int newdaily);
	public boolean checkGoalId(String id);
	public List<DailyVO> getByGoal(String id);
	public boolean checkDailyId(String id);
	public void updateDaily(DailyVO daily);
	public void deleteDaily(String id);
	
}
