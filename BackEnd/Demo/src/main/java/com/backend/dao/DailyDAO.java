package com.backend.dao;

import com.backend.dto.DailyVO;

public interface DailyDAO {

	public void newDaily(DailyVO daily);
	public String newDailyId();
	public void updateNewId(int newdaily);
}
