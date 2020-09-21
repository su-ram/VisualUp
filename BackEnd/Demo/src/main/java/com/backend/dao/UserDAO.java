package com.backend.dao;

import java.util.List;

import com.backend.dto.UserVO;

public interface UserDAO {
	
	public List<UserVO> selectUser() throws Exception;

}
