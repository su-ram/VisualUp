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
		
		String latest = dailydao.newDailyId();
		int start=0;
		
		for(int i=0; i< latest.length(); i++) {
			
			if(latest.charAt(i) == '-') {
				start = i +1;
				break;
			}
			
		}
		
		
		String newid = latest.substring(start, latest.length());
		int temp = Integer.parseInt(newid)+1;
		newid = "daily-"+String.valueOf(temp);
		
		newDaily.setDailyid(newid);
		
		dailydao.newDaily(newDaily);
	}

}
