package com.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
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
	public @ResponseBody String newDaily(@RequestBody DailyVO newDaily) {
		
		dailyService.newDaily(newDaily);
		return "new dailyCehck accepted";
	}

}
