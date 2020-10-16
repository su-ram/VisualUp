package com.backend.service;

import java.util.List;

import com.backend.dto.DailyVO;


public interface DailyService {
	public String newDaily(DailyVO newDaily);
	public List<DailyVO> getByGoal(String goalid);
	public boolean checkDaily(String id);
	public void updateDaily(DailyVO daily);
	public void deleteDaily(String id);
}
