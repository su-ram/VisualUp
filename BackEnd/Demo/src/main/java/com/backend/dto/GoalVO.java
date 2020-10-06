package com.backend.dto;



import java.sql.Date;

import lombok.Data;

@Data
public class GoalVO {
	
	private String goalId;
	private String userId;
	private String hashId;
	private String title;
	private String startDate;
	private String endDate;
	private int term;
	private String termGoal;
	private boolean open;
	private String hashtags;
	private String template;
	private String graphColor;
	
	

}
