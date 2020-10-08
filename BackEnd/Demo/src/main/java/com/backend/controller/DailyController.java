package com.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.backend.dto.DailyVO;
import com.backend.service.DailyService;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequestMapping(value="/daily")
public class DailyController {
	
	@Autowired
	private DailyService dailyService;
	
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<?> newDaily(@RequestBody DailyVO newDaily) {
		//데일리 체크 생성
		
		
		String result = dailyService.newDaily(newDaily);
		
		if(result == null) {
			return new ResponseEntity<String>("goalId가 없습니다.", HttpStatus.BAD_REQUEST);
		}else {
			return ResponseEntity.status(HttpStatus.OK).body(result);
		}
	}

}
