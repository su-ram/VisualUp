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
    	newbie.setName(name);
    	newbie.setEmail(email);
    	newbie.setUserid(newid);
    	newbie.setType(type);
    	dao.newUser(newbie);
    	
    	return newid;
		
	}
	
	@Override
	public String getNewUserid() throws Exception{
		
		String latest = dao.getNewUserid();
		int start = 0;
		
		for(int i=0; i<latest.length(); i++) {
			if (latest.charAt(i) == '-') {
				start = i + 1;
				break;
			}
		}
		
		String newId = latest.substring(start, latest.length());
		int temp = Integer.parseInt(newId)+1;
		newId = "user-"+String.valueOf(temp);
		
		
		return newId;
	}

	@Override
	public String loginRequest(String name, String email) throws Exception {
		//로그인 요청이 들어옴. 이미 회원인 사용자인지 tf 구분해서 리턴함. 새로운 회원 T, 기존 회원 F
		
		List<UserVO> newuser = dao.newUser(name, email);
		if(newuser.size() == 0) {
			return null;
		}else {
			return getUserid(name,email);
		}
		
		
		
	}

	@Override
	public String getUserid(String name, String email) throws Exception {
		// 기존 사용자의 회원번호 리턴
		
		UserVO user = new UserVO();
		user.setEmail(email);
		user.setName(name);
		
		return dao.getUserid(user);
	}

}
