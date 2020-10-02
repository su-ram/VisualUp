package com.backend.dto;



import java.sql.Date;

import lombok.Data;

@Data
public class GoalVO {
	
	private String goalid;
	private String userid;
	private String title;
	private String content;
	private String startDate;
	private String endDate;
	private int term;
	private boolean open;
	private String keywords;
	

}
