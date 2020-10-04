package com.backend.service;

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
		
		newDaily.setDailyid(newid);
		
		dailydao.newDaily(newDaily);
		
		
	}

}
