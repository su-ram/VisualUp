package com.backend.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.backend.dto.DailyVO;
import com.backend.service.DailyService;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequestMapping(value="/daily")
public class DailyController {
	
	@Autowired
	private DailyService dailyService;
	private String dailyId;
	
	@RequestMapping(method=RequestMethod.POST, produces="text/plain; charset=utf-8")
	public ResponseEntity<?> newDaily(@RequestBody DailyVO newDaily) {
		//데일리 체크 생성
		
		
		String result = dailyService.newDaily(newDaily);
		
		if(result == null) {
			return new ResponseEntity<String>("goalId가 없습니다.", HttpStatus.BAD_REQUEST);
		}else {
			return ResponseEntity.status(HttpStatus.OK).body(result);
		}
	}
	
	@RequestMapping(method=RequestMethod.PUT, produces="text/plain; charset=utf-8")
	public ResponseEntity<String> updateDaily(HttpServletRequest request, @RequestBody DailyVO daily){
		
		dailyId = request.getParameter("dailyId");
		daily.setDailyId(dailyId);
		
		boolean idCheck = dailyService.checkDaily(dailyId);
		
		if (!idCheck)
			return new ResponseEntity<String>("해당 데일리 체크가 존재하지 않습니다.", HttpStatus.BAD_REQUEST);
		else {
			dailyService.updateDaily(daily);
			return new ResponseEntity<String>("수정 성공", HttpStatus.OK);
		}
		
	}
	
	
	@RequestMapping(method=RequestMethod.DELETE, produces="text/plain; charset=utf-8")
	public ResponseEntity<String> deleteDaily(HttpServletRequest request){
		
		dailyId = request.getParameter("dailyId");
		
		boolean idCheck = dailyService.checkDaily(dailyId);
		
		if (!idCheck) {
			return new ResponseEntity<String>("해당 데일리 체크가 존재하지 않습니다.", HttpStatus.BAD_REQUEST);
		}else {
			dailyService.deleteDaily(dailyId);
			return new ResponseEntity<String>("삭제 성공", HttpStatus.OK);
		}
	}
	
}
