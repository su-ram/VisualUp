package com.backend.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.backend.dto.DailyVO;

@Repository
public class DailyDAOImple implements DailyDAO{

	@Autowired
	private SqlSession sqlSession;
	private static final String Namespace = "com.backend.mapper.dailyMapper";
	
	
	@Override
	public void newDaily(DailyVO daily) {
		sqlSession.insert(Namespace+".newDaily", daily);
		
	}


	@Override
	public String newDailyId() {
		
		return sqlSession.selectOne(Namespace+".newDailyId");
	}

}
