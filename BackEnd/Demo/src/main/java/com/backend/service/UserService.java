package com.backend.service;

import java.util.List;

import com.backend.dto.UserVO;

public interface UserService {
	
	public List<UserVO> selectUser() throws Exception;
	public String newUser(String name, String email, String type) throws Exception;
	public String getNewUserid() throws Exception;
	public String loginRequest(UserVO user) throws Exception;
	public String getUserid(String name, String email) throws Exception;
	public UserVO getUserById(String id) throws Exception;
	public boolean checkUser(String id) throws Exception;
	public boolean updateToken(UserVO user) throws Exception;

}
