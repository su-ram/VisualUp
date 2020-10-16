package com.backend.controller;

import java.net.URLEncoder;

public class RequestLogin {
	// 소셜 로그인 구현을 위해 로그인을 요청하는 url을 반환하는 객체이다. 
	
	

	private String requestURL;
	
	public String requestKakao() {
		
		requestURL = "https://kauth.kakao.com/oauth/authorize";
		requestURL +="?client_id=cead37f7d4b6971d3ce0be9d314f4852";
		requestURL +="&redirect_uri=http://visualup.koreacentral.cloudapp.azure.com/login?type=kakao";
		requestURL +="&response_type=code";
		
		return requestURL;
	}
	
	public String requestGoogle() {
		
		
	    requestURL = "https://accounts.google.com/o/oauth2/v2/auth?response_type=code&access_type=offline";
	    requestURL += "&client_id=637540086741-c6k444vhqd1eid2aid6p86hmh4pldpje.apps.googleusercontent.com";
	    requestURL += "&redirect_uri="+URLEncoder.encode("http://visualup.koreacentral.cloudapp.azure.com/login?type=google");
	    requestURL += "&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";
	        
	    
	    
		return requestURL;
	}

	public String requestGithub() {
		
		
		requestURL = "https://github.com/login/oauth/authorize";
		requestURL += "?client_id=f8d6a5e720a1e485d0ed";
		requestURL += "&redirect_uri=http://visualup.koreacentral.cloudapp.azure.com/login?type=github";
		requestURL += "&scope=user";
		
	return requestURL;
	}
}
