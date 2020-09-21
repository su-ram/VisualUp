package com.backend.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.backend.dto.UserVO;

@Repository
public class UserDAOImple implements UserDAO{
	
	@Inject
	private SqlSession sqlSession;
	private static final String Namespace = "com.backend.mapper.userMapper";
	
	@Override
	public List<UserVO> selectUser() throws Exception{
		
		return sqlSession.selectList(Namespace+".selectUser");
	}

}
