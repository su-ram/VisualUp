package com.backend.service;

import java.util.List;

import com.backend.dto.UserVO;

public interface UserService {
	
	public List<UserVO> selectUser() throws Exception;
	public boolean newUser(String name, String email) throws Exception;
	public String getNewUserid() throws Exception;

}
