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
	
	@Override
	public String newUser(String name, String email, String type) throws Exception{
		
		//새로운 사용자를 등록함 
		String newid = getNewUserid();
		
		
		UserVO newbie = new UserVO();
    	newbie.setUserName(name);
    	newbie.setUserEmail(email);
    	newbie.setUserId(newid);
    	newbie.setType(type);
    	dao.newUser(newbie);
    	
    	
    	
    	return newid;
		
	}
	
	@Override
	public String getNewUserid() throws Exception{
		
		String newId = "user"+dao.getNewUserid();
		
		return newId;
	}

	@Override
	public String loginRequest(UserVO user) throws Exception {
		//로그인 요청이 들어옴. 이미 회원인 사용자인지 
		
		
		List<UserVO> newuser = dao.newUserCheck(user);
		
		if(newuser.size() == 0) {
			return null;
		}else {
			
			UserVO alreadyUser = newuser.get(0);
			alreadyUser.setToken(user.getToken());
			dao.updateToken(alreadyUser);
			
			
			return alreadyUser.getUserId();
		}
		
		
		
	}

	@Override
	public String getUserid(String name, String email) throws Exception {
		// 기존 사용자의 회원번호 리턴
		
		UserVO user = new UserVO();
		user.setUserEmail(email);
		user.setUserName(name);
		
		return dao.getUserid(user);
	}

	@Override
	public UserVO getUserById(String id) throws Exception {
		
		return dao.getById(id);
	}

	@Override
	public boolean checkUser(String id) throws Exception {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean updateToken(UserVO user) throws Exception {
		// TODO Auto-generated method stub
		return false;
	}

}
