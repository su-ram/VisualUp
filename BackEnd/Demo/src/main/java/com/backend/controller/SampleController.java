package com.backend.controller;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.backend.dto.UserVO;
import com.backend.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Controller
@RequestMapping("/sample/*")
@Slf4j
public class SampleController {
	
	@Inject
	private UserService service;
	
	@GetMapping("/db")
	public String returnDB(Model model) throws Exception{
		
		List<UserVO> userlist = service.selectUser();
		model.addAttribute("userlist",userlist);
		return "userlist";
	}
	
	@GetMapping("/facebook")
	public String shareFB(Model model) {
		
		return "shareFB";
	}
	
}
