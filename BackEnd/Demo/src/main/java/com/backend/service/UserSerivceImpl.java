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
	public boolean newUser(String name, String email) throws Exception{
		
		List<UserVO> newuser = dao.newUser(name, email);
		
		if (newuser.size() == 0) {
			
			
			UserVO newbie = new UserVO();
        	newbie.setName(name);
        	newbie.setEmail(email);
        	newbie.setUserid(getNewUserid());
        	dao.newUser(newbie);
        	
        	
        	return true;
		
		}
		else
			return false;
		
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

}
