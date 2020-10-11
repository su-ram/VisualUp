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
		
		goalDao.insertGoal(newgoal);
		

	}
	
	@Override
	public String newGoalID() {
		return goalDao.newGoalID();
	}
	
	@Override
	public List<GoalVO> getGoalList(String userid){
		
		if(checkUserId(userid)) {
			return goalDao.getGoalList(userid);
		}
		else
			return null;
		
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
		
		return goalDao.goalByHashtag(name);
	}

	@Override
	public boolean checkUserId(String id) {
		
		
		return goalDao.checkUserId(id);
	}

	@Override
	public String getTermGoal(String id) {
		
		return goalDao.getTermGoal(id);
	}

	@Override
	public List<GoalVO> getById(String id) {
		
		return goalDao.goalById(id);
	}

}
