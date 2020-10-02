package com.backend.dao;

import java.util.List;

import com.backend.dto.UserVO;

public interface UserDAO {
	
	public List<UserVO> selectUser() throws Exception;
	public List<UserVO> newUser(String name, String email) throws Exception;
	public String getNewUserid() throws Exception;
	public void newUser(UserVO newUser) throws Exception;

}
