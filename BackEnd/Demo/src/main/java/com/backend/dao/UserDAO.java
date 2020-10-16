package com.backend.dao;

import java.util.List;

import com.backend.dto.UserVO;

public interface UserDAO {
	
	public List<UserVO> selectUser() throws Exception;
	public List<UserVO> newUserCheck(UserVO user) throws Exception;
	public String getNewUserid() throws Exception;
	public void newUser(UserVO newUser) throws Exception;
	public String getUserid(UserVO user) throws Exception;
	public void updateNewUser(int newUser) throws Exception;
	public UserVO getById(String id) throws Exception;
	public void updateToken(UserVO user) throws Exception;

}
