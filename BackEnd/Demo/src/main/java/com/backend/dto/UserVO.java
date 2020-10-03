package com.backend.dto;

import lombok.Data;

@Data
public class UserVO {
	
	private String userid;
	private String name;
	private String email;
	private String type;
	private String token;

}
