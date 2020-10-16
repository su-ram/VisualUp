package com.backend.controller;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.backend.dto.UserVO;
import com.backend.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Controller
@RequestMapping("/sample/*")
@Slf4j
@ComponentScan({"javax.servlet.http.*","java.util.*"})
public class SampleController {
	
	@Inject
	private UserService service;
	@Autowired
	private HttpSession session;
	@GetMapping("/db")
	public String returnDB(Model model) throws Exception{
		
		List<UserVO> userlist = service.selectUser();
		model.addAttribute("userlist",userlist);
		return "userlist";
	}
	
	@GetMapping("/test")
	public String thisisTest(Model model) {
		
		return "redirect:http://www.naver.com";
		
	}
	
	@PostMapping("/response")
	public @ResponseBody String shareFB(@RequestBody UserInfo requestuser) {
		
		UserInfo user = new UserInfo();
		user.setUserEmail("swamys@naver.com");
		user.setUserName("suram");
		
		UserInfo user2 = new UserInfo();
		user2.setUserEmail("swamys0031@gmail.com");
		user2.setUserName("soolam");
		
		ArrayList<UserInfo> userlist = new ArrayList<UserInfo>();
		userlist.add(user);
		userlist.add(user2);
		
		
		UserInfo request = requestuser;
		System.out.println(request.getUserEmail());
		
		
		return "Success";
	}
	
	
	@GetMapping("/session")
	public @ResponseBody Object session(HttpServletRequest request, HttpServletResponse response) {
		
		session = request.getSession();
		session.setAttribute("key", "This is value.");
		
		Cookie ck = new Cookie("userId","suram");
		ck.setMaxAge(60*60*24*365);
		ck.setPath("/");
		//response.addCookie(ck);
		
		return session.toString();
		
		
	}
	
	@GetMapping("/session2")
	public @ResponseBody Object session2(HttpServletRequest request, Model model) {
		
		HttpSession session = request.getSession();
		Cookie[] cookies = request.getCookies();
		for(int i=0; i<cookies.length;i++) {
			System.out.println(cookies[i].getName()+cookies[i].getValue());
		}
				

		return session.toString();
		
	}
	
	@GetMapping("/logout")
	public String logout(HttpServletRequest request, Model model) {
		
		HttpSession session = request.getSession();
		session.invalidate();
		
		
		model.addAttribute("session", session);
		
		return "session";
	}
}
