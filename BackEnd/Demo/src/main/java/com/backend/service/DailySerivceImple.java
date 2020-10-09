package com.backend.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.backend.dao.DailyDAO;
import com.backend.dto.DailyVO;

@Service
public class DailySerivceImple implements DailyService {

	@Inject
	private DailyDAO dailydao;
	
	@Override
	public String newDaily(DailyVO newDaily) {
		
		if(dailydao.checkGoalId(newDaily.getGoalId())) {
			
		String newid = "daily"+dailydao.newDailyId();
		DateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		newDaily.setTodayDate(format.format(new Date()));
		newDaily.setDailyId(newid);
		dailydao.newDaily(newDaily);
		return newid;
		
		}
		
		return null;
		
	}

	@Override
	public List<DailyVO> getByGoal(String goalid) {
		
		return dailydao.getByGoal(goalid);
	}

	@Override
	public boolean checkDaily(String id) {
		
		
		return dailydao.checkDailyId(id);
	}

	@Override
	public void updateDaily(DailyVO daily) {
		
		dailydao.updateDaily(daily);
		
	}

	@Override
	public void deleteDaily(String id) {
		
		dailydao.deleteDaily(id);
	}

}
