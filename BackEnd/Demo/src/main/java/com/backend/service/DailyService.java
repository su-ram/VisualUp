package com.backend.service;

import org.springframework.stereotype.Service;

import com.backend.dto.DailyVO;


public interface DailyService {
	public void newDaily(DailyVO newDaily);
}
