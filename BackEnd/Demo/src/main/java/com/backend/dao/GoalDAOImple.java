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
		
		int latest = (Integer)sqlSession.selectOne(Namespace+".generateNewGoalID")+1;
		updateNewGoal(latest);
		
		return String.valueOf(latest);
	}
		
	
	@Override
	public List<GoalVO> getGoalList(String userid){
		
		return sqlSession.selectList(Namespace+".getGoalList",userid);
	}

	@Override
	public boolean checkGoalId(String goalid) {
		
		String result = sqlSession.selectOne(Namespace+".checkGoalId", goalid);
		
		if( result == null) {
			return false;
		}else {
			return true;
		}
	}

	@Override
	public void updateGoal(GoalVO goal) {
		
		sqlSession.update(Namespace+".updateGoal", goal);
		
	}

	@Override
	public void deleteGoal(String goalid) {
		
		sqlSession.delete(Namespace+".deleteGoal", goalid);
		
	}

	@Override
	public void updateNewGoal(int newGoal) {
		sqlSession.update(Namespace+".updateNewGoal", newGoal);
		
	}

}
