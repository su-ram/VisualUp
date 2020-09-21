package com.backend.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.backend.dao.UserDAO;
import com.backend.dto.UserVO;

@Service
public class UserSerivceImpl implements UserService{
	
	@Inject
	private UserDAO dao;
	
	@Override
	public List<UserVO> selectUser() throws Exception{
		return dao.selectUser();
	}

}
