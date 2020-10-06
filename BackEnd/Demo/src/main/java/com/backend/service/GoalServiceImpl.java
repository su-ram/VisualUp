package com.backend.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.backend.dao.GoalDAO;
import com.backend.dto.GoalVO;
@Service
public class GoalServiceImpl implements GoalService {
	
	@Inject
	private GoalDAO goalDao;

	@Override
	public void insertGoal(GoalVO newgoal){
		String hashId = goalDao.newHashId();
		
		
		goalDao.insertGoal(newgoal);
		

	}
	
	@Override
	public String newGoalID() {
		return goalDao.newGoalID();
	}
	
	@Override
	public List<GoalVO> getGoalList(String userid){
		return goalDao.getGoalList(userid);
	}

	@Override
	public boolean updateGoal(GoalVO goal) {
		
		String goalid = goal.getGoalId();
		if (goalDao.checkGoalId(goalid)) {
			goalDao.updateGoal(goal);
			return true;
		}		
		return false;
	}

	@Override
	public boolean deleteGoal(String goalid) {
		
		if(goalDao.checkGoalId(goalid)) {
			goalDao.deleteGoal(goalid);
			return true;
		}
		
		
		return false;
	}

	@Override
	public void selectTargetDate(String userid, String start, String end) {

		
		
	}

	@Override
	public List<GoalVO> goalByHashtag(String name) {
		// TODO Auto-generated method stub
		return goalDao.goalByHashtag(name);
	}

}
