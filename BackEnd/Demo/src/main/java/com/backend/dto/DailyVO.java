package com.backend.dto;

import lombok.Data;

@Data
public class DailyVO {
	
	private String dailyid;
	private String userid;
	private String goalid;
	private int target;
	private String todayDate;
	private String whatIdone;
	private boolean done;
	private String hashtags;

}
