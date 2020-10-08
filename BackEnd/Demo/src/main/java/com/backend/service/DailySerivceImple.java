package com.backend.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.backend.dao.DailyDAO;
import com.backend.dto.DailyVO;

@Service
public class DailySerivceImple implements DailyService {

	@Inject
	private DailyDAO dailydao;
	
	@Override
	public void newDaily(DailyVO newDaily) {
		
		String newid = "daily"+dailydao.newDailyId();
		DateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		newDaily.setTodayDate(format.format(new Date()));
		newDaily.setDailyId(newid);
		dailydao.newDaily(newDaily);
		
		
	}

}
