package com.backend.dao;

import java.util.List;



import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.backend.dto.GoalVO;

@Repository
public class GoalDAOImple implements GoalDAO {

	@Inject
	private SqlSession sqlSession;
	private static final String Namespace = "com.backend.mapper.goalMapper";
	
	@Override
	public int insertGoal(GoalVO goal){
	
		
		return sqlSession.insert(Namespace+".insertGoal",goal);
	}
	
	@Override
	public String newGoalID() {
		
		return sqlSession.selectOne(Namespace+".generateNewGoalID");
	}
	
	@Override
	public List<GoalVO> getGoalList(String userid){
		
		return sqlSession.selectList(Namespace+".getGoalList",userid);
	}

}
