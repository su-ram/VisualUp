package com.backend.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.text.ParseException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.backend.dto.UserVO;
import com.backend.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequestMapping("/login")
@ComponentScan({"org.json.simple.parser.*","java.util.*"})
public class LoginController {
	
	//private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	private String code;
	private String endpoint;
	private String redirectUrl;
	@Resource(name="Map")
	private Map<String, String> map;
	private String resultString;
	@Autowired
	private JSONParser jsonParser;
	private JSONObject json;
	private String access_Token;
	private String client_Id;
	private String client_Secret;
	private String userName,userEmail,userId;

	@Autowired
	private UserService userService;
	private HttpSession session;
	
	
	@RequestMapping(params="userid")
	public String login(){
		return "defaultLogin";
		
	}
	
	public String checkUser(UserVO user, String type) throws Exception{
		//이름과 메일주소로 기존 회원인지 신규 회원인지 알려주는 메소드.
		
		String userid = userService.loginRequest(user);
    	
    	if(userid == null) {
    		//새로운 사용자인 경우
    		
    		userid = userService.newUser(userName, userEmail,type);
    		
    		
    	}
		
		return userid;
	}
	
	@RequestMapping(params="type=kakao")
	public ResponseEntity<String> kakaoLogin(HttpServletRequest request, HttpServletResponse response) throws IOException, ParseException {
		//카카오 로그인 콜백 페이지 
		
		session = request.getSession();
		
		
		code = request.getParameter("code");
		endpoint = "https://kauth.kakao.com/oauth/token?grant_type=authorization_code";
		map = new HashMap<String, String>();
		map.put("&client_id", "cead37f7d4b6971d3ce0be9d314f4852");
		map.put("&redirect_uri", "http://visualup.koreacentral.cloudapp.azure.com/login?type=kakao");
		map.put("&code", code);
		
		resultString = requestToServer(endpoint,map);
		
		
		try {
			json = (JSONObject)jsonParser.parse(resultString);
			access_Token = (String)json.get("access_token");
			
		}catch(Exception e) {
			e.printStackTrace();
			
		}
		
		endpoint = "https://kapi.kakao.com/v2/user/me";
		String header = "Bearer "+access_Token;
		Map<String, String> requestHeaders = new HashMap<>();
        requestHeaders.put("Authorization", header);
        requestHeaders.put("Accept", "application/json");
        
        resultString = get(endpoint,requestHeaders);
        
        
        
        try {
        	json = (JSONObject)jsonParser.parse(resultString);
        	
        	json = (JSONObject)json.get("kakao_account");
        	userEmail = (String)json.get("email");
        	
        	json = (JSONObject)json.get("profile");
        	userName = (String)json.get("nickname");
        	
        	UserVO user = new UserVO();
        	user.setToken(access_Token);
        	user.setUserEmail(userEmail);
        	user.setUserName(userName);
        	
        	userId = checkUser(user,"kakao");
        	session.setAttribute("userid", userId);
        	
        	Cookie cookie = new Cookie("userId",userId);
	    	cookie.setMaxAge(60*60*24);
	    	cookie.setPath("/");
	    	response.addCookie(cookie);
        	
        	
        }catch(Exception e) {
        	e.printStackTrace();
        }
		
		
		System.out.println(userId);
		System.out.println("you are logged in session : "+session.toString());
		return new ResponseEntity<String>(session.toString(), HttpStatus.OK);
		
	}
	
	
	@RequestMapping(params="type=google")
	public ResponseEntity<String> googleLogin(HttpServletRequest request, HttpServletResponse response) throws IOException, ParseException{

		session = request.getSession();
		
		code = request.getParameter("code");
		endpoint = "https://oauth2.googleapis.com/token?grant_type=authorization_code";

		map.put("&client_id","637540086741-c6k444vhqd1eid2aid6p86hmh4pldpje.apps.googleusercontent.com");
		map.put("&client_secret", "__BOsppoRfIu-xfU23qyzGit");
		map.put("&redirect_uri", "http://visualup.koreacentral.cloudapp.azure.com/login?type=google");
		map.put("&code", code);
		
		
		resultString = requestToServer(endpoint,map);
		
		
	    try{
	    	json = (JSONObject)jsonParser.parse(resultString); 
	    	access_Token=(String)json.get("access_token");
	    }catch(Exception e) {
	    	
	    }
	    
	   
	    
	    String header = "Bearer " + access_Token; // Bearer 다음에 공백 추가

        endpoint = "https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses&key=AIzaSyDpDsCLnD7Z-FINT_3J-72hmWmMPZP9ewI";

        map.clear();
       
        map.put("Authorization", header);
        map.put("Accept", "application/json");
       
        resultString = get(endpoint,map);
        
        
        
        
        try{
        	json = (JSONObject)jsonParser.parse(resultString); 
        	JSONArray jsonarray = (JSONArray)json.get("names");
        	JSONObject data = (JSONObject)jsonarray.get(0);
        	userName = (String)data.get("displayName");
        	
        	jsonarray=(JSONArray)json.get("emailAddresses");
        	data = (JSONObject)jsonarray.get(0);
        	userEmail = (String)data.get("value");
	    
        	UserVO user = new UserVO();
        	user.setToken(access_Token);
        	user.setUserEmail(userEmail);
        	user.setUserName(userName);
	    	
	    	userId = checkUser(user,"google");
	    	
	    	Cookie cookie = new Cookie("userId",userId);
	    	cookie.setMaxAge(60*60*24);
	    	cookie.setPath("/");
	    	response.addCookie(cookie);
	    	session.setAttribute("userid", userId);
	    	
	    	
	    }catch(Exception e) {
	    	
	    	e.printStackTrace();
	    }
	    
        
	    	    
	    return new ResponseEntity<String>(userId,HttpStatus.OK);
	}


	@RequestMapping(params="type=github")
	public @ResponseBody String Callback(HttpServletRequest request, HttpServletResponse response) throws IOException{
		
		session = request.getSession();
		
		code = request.getParameter("code");
		endpoint = "https://github.com/login/oauth/access_token";
		map = new HashMap<String,String>();
		map.put("&client_id","f8d6a5e720a1e485d0ed");
		map.put("&client_secret", "aa6ce5f3c042819efa5bc112f2f8e4663eae2ea1");
		map.put("&code", code);
		resultString = requestToServer(endpoint, map);
	    

		
	    try{
	    	json = (JSONObject)jsonParser.parse(resultString); 
	    	access_Token=(String)json.get("access_token");
	    }catch(Exception e) {
	    	
	    }
	    
	    String header = "token " + access_Token;

        endpoint = "https://api.github.com/user";

        Map<String, String> requestHeaders = new HashMap<>();
        requestHeaders.put("Authorization", header);
        requestHeaders.put("Accept", "application/json");
        
        String responseBody = get(endpoint,requestHeaders);
        
       
        
        try{
	    	json= (JSONObject)jsonParser.parse(responseBody); 
	    	userName = (String)json.get("name");
	    	userEmail = (String)json.get("email");
	    	
	    	if(userName != null && userEmail != null) {

	    	UserVO user = new UserVO();
        	user.setToken(access_Token);
        	user.setUserEmail(userEmail);
        	user.setUserName(userName);
	        
	        userId = checkUser(user,"github");
	        session.setAttribute("userid", userId);
	        
	        Cookie cookie = new Cookie("userId",userId);
	    	cookie.setMaxAge(60*60*24);
	    	cookie.setPath("/");
	    	response.addCookie(cookie);
	    	
	    	
	    	}
	    }catch(Exception e) {
	    	e.printStackTrace();
	    }
	    
	   
		
		return responseBody;
	}
	
	
	public String requestToServer(String apiurl, Map < String, String > pList) throws IOException {
		
		URL url = new URL(apiurl);
		HttpURLConnection con = (HttpURLConnection)url.openConnection();
		
		con.setRequestMethod("POST");
		con.setDefaultUseCaches(false);
        con.setDoInput(true); // 서버에서 읽기 모드 지정 
        con.setDoOutput(true);
        con.setRequestProperty("Accept", "application/json");
        con.setRequestProperty("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");

		StringBuffer buffer = new StringBuffer();

        //HashMap으로 전달받은 파라미터가 null이 아닌경우 버퍼에 넣어준다
        if (pList != null) {

            Set key = pList.keySet();

            for (Iterator iterator = key.iterator(); iterator.hasNext();) {
                String keyName = (String) iterator.next();
                String valueName = pList.get(keyName);
                buffer.append(keyName).append("=").append(valueName);
            }
        }
        
        OutputStreamWriter outStream = new OutputStreamWriter(con.getOutputStream(), "UTF-8");
        PrintWriter writer = new PrintWriter(outStream);
        writer.write(buffer.toString());
        writer.flush();
		
        
        
		
		int responseCode = con.getResponseCode();
		
		System.out.println("Response : "+responseCode);
		
		BufferedReader br;
		
		if(responseCode == 200) { // 정상 호출
		      br = new BufferedReader(new InputStreamReader(con.getInputStream()));
		    } else {  // 에러 발생
		      br = new BufferedReader(new InputStreamReader(con.getErrorStream()));
		    }
		
		String inputLine;
	    StringBuffer res = new StringBuffer();
	    while ((inputLine = br.readLine()) != null) {
	      res.append(inputLine);
	    }
	    br.close();
	    if(responseCode==200) {
	      return res.toString();
	    } else {
	      return res.toString();
	    }
		
		
		
        
        
	}
	
	private static String get(String apiUrl, Map<String, String> requestHeaders){
        HttpURLConnection con = connect(apiUrl);
        try {
            con.setRequestMethod("GET");
            for(Map.Entry<String, String> header :requestHeaders.entrySet()) {
                con.setRequestProperty(header.getKey(), header.getValue());
            }

            int responseCode = con.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) { // 정상 호출
                return readBody(con.getInputStream());
            } else { // 에러 발생
                return readBody(con.getErrorStream());
            }
        } catch (IOException e) {
            throw new RuntimeException("API 요청과 응답 실패", e);
        } finally {
            con.disconnect();
        }
    }
	
	private static HttpURLConnection connect(String apiUrl){
	        try {
	            URL url = new URL(apiUrl);
	            return (HttpURLConnection)url.openConnection();
	        } catch (MalformedURLException e) {
	            throw new RuntimeException("API URL이 잘못되었습니다. : " + apiUrl, e);
	        } catch (IOException e) {
	            throw new RuntimeException("연결이 실패했습니다. : " + apiUrl, e);
	        }
	    }

	private static String readBody(InputStream body){
	        InputStreamReader streamReader = new InputStreamReader(body);

	        try (BufferedReader lineReader = new BufferedReader(streamReader)) {
	            StringBuilder responseBody = new StringBuilder();

	            String line;
	            while ((line = lineReader.readLine()) != null) {
	                responseBody.append(line);
	            }

	            return responseBody.toString();
	        } catch (IOException e) {
	            throw new RuntimeException("API 응답을 읽는데 실패했습니다.", e);
	        }
	    }
	    
	    
}
