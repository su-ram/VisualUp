package com.backend.controller;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@RequestMapping(value = "/", method=RequestMethod.GET)
	public String getHome(HttpServletRequest request,Model model) {
		logger.info("HomeController is called");
		HttpSession session = request.getSession();
		String id = (String)session.getAttribute("userid");
		model.addAttribute("main_page", "VisualUp 메인 페이지입니다" );
		model.addAttribute("session", id);
		
		return "/home/home";
	}
	
	@RequestMapping(value = "/", method=RequestMethod.GET, params="userid")
	public String getUserHome(@RequestParam("userid") String userid, Model model) {
		logger.info("HomeController is called");
		model.addAttribute("user_page", "사용자 "+userid+"의 메인 페이지입니다" );
		return "/home/userhome";
	}
	
	@RequestMapping(value="/logoutSample", method=RequestMethod.GET)
	public String logout(HttpServletRequest request, Model model) {
		
		HttpSession session = request.getSession();
		String id = (String)session.getAttribute("userid");
		
		session.invalidate();
		model.addAttribute("logout", "회원번호"+id+"가 로그아웃되었음.ㅎ");
		
		return "home/home";
	}
	
	@RequestMapping(value = "/login", method=RequestMethod.GET)
	public @ResponseBody HashMap<String, String> loginHome(HttpServletRequest request) {
		
		HttpSession session = request.getSession();
		String id = (String)session.getAttribute("userid");
		RequestLogin requestLogin = new RequestLogin();
		
		HashMap<String,String> map = new HashMap<String,String>();
		
		map.put("github", requestLogin.requestGithub());
		map.put("google", requestLogin.requestGoogle());
		map.put("kakao",requestLogin.requestKakao());

	
		return map;
	}
	
	
	
}
