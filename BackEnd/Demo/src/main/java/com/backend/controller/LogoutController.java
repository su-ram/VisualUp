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

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.backend.dto.UserVO;
import com.backend.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequestMapping("/logout")
public class LogoutController {

	@Autowired
	private UserService userService;
	String endpoint;
	HashMap<String, String> map;
	
	@RequestMapping(method=RequestMethod.GET)
	public @ResponseBody String logout(HttpServletRequest request, HttpServletResponse response) throws Exception{
		HttpSession session = request.getSession();
		

		String userid = (String)session.getAttribute("userid");
		System.out.println("Your Session is -> "+session.toString());
		UserVO user = userService.getUserById(userid);
		//String type = user.getType();
		
				
		session.invalidate();
		Cookie userCookie = new Cookie("userId", null);
		userCookie.setMaxAge(0);
		userCookie.setPath("/");
		response.addCookie(userCookie);
		
		return "user id : "+userid;
		
	}
	
	@RequestMapping(params="type=kakao")
	public ResponseEntity<String> kakaoLogout(HttpServletRequest request) throws IOException, ParseException {
		
		endpoint="https://kauth.kakao.com/oauth/logout?";
		map = new HashMap<String, String>();
		map.put("client_id=", "cead37f7d4b6971d3ce0be9d314f4852");
		map.put("&logout_redirect_uri", "http://visualup.koreacentral.cloudapp.azure.com/logout?type=kakao");
		
		requestGet(endpoint,map);
		
		return null;
		
		
	}
	
	public String requestLogout(UserVO user) throws Exception {
		
		
		endpoint = "https://kapi.kakao.com//v1/user/logout";
		map = new HashMap<String, String>();
		String header = "Bearer "+user.getToken();
		map.put("Authorization", header);
        map.put("Accept", "application/json");
        String type = user.getType();
        
        System.out.println(requestToServer(endpoint,map));
      
        
        
		
		return null;
	}
	private static String requestGet(String apiUrl, Map<String, String> requestHeaders){
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
    
	
	public String requestToServer(String apiurl, Map < String, String > pList) throws IOException {
		
		URL url = new URL(apiurl);
		HttpURLConnection con = (HttpURLConnection)url.openConnection();
		
		con.setRequestMethod("POST");
		con.setDefaultUseCaches(false);
        con.setDoInput(true); // 서버에서 읽기 모드 지정 
        con.setDoOutput(true);
        //con.setRequestProperty("Accept", "application/json");
        //con.setRequestProperty("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");

		StringBuffer buffer = new StringBuffer();

        //HashMap으로 전달받은 파라미터가 null이 아닌경우 버퍼에 넣어준다
        if (pList != null) {

            Set key = pList.keySet();

            for (Iterator iterator = key.iterator(); iterator.hasNext();) {
                String keyName = (String) iterator.next();
                String valueName = pList.get(keyName);
                //buffer.append(keyName).append("=").append(valueName);
                con.setRequestProperty(keyName, valueName);
                
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
	
}
