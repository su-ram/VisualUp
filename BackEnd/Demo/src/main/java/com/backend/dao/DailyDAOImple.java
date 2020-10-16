package com.backend.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
		int latest = (Integer)sqlSession.selectOne(Namespace+".newDailyId")+1;
		updateNewId(latest);
		return String.valueOf(latest);
	}


	@Override
	public void updateNewId(int newdaily) {
		sqlSession.update(Namespace+".updateNewId", newdaily);
		
	}


	@Override
	public boolean checkGoalId(String id) {
		
		String goalid = sqlSession.selectOne(Namespace+".checkGoalId", id);
		
		if(goalid == null) {
			return false;
		}else {
			return true;
		}
		
	}


	@Override
	public List<DailyVO> getByGoal(String id) {
		
		return sqlSession.selectList(Namespace+".getByGoal", id);
	}


	@Override
	public boolean checkDailyId(String id) {
		
		
		DailyVO data = sqlSession.selectOne(Namespace+".checkDaily", id);
		
		if (data == null)
			return false;
		
		return true;
	}


	@Override
	public void updateDaily(DailyVO daily) {
		
		sqlSession.update(Namespace+".updateDaily", daily);
	}


	@Override
	public void deleteDaily(String id) {

		sqlSession.delete(Namespace+".deleteDaily", id);
	}

}
