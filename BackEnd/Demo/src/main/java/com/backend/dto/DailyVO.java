package com.backend.dto;

import lombok.Data;

@Data
public class DailyVO {
	
	private String dailyId;
	private String userId;
	private String goalId;
	private String todayDate;
	private String whatIdone;
	private int stars;
	

}
