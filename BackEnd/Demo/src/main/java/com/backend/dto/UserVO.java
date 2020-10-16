package com.backend.dto;

import lombok.Data;

@Data
public class UserVO {
	
	private String userId;
	private String userName;
	private String userEmail;
	private String type;
	private String token;

}
