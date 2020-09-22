package com.backend.demo;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.math.BigInteger;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.security.SecureRandom;
import java.text.ParseException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequestMapping("/login")
public class LoginController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	private String Client_Id = "tIcE8QEmk0yLr1xspdzg";
	private String Client_Secret = "4eOgnPfHrN";
	
	@RequestMapping(params="userid")
	public String login(){
		return "defaultLogin";
		
	}
	@RequestMapping(params="type=naver")
	public String naverLogin(HttpSession session, Model model) {
		String redirectURI = URLEncoder.encode("http://visualup.koreacentral.cloudapp.azure.com:8080/login/callback");
		SecureRandom random = new SecureRandom();
	    String state = new BigInteger(130, random).toString();
	    String apiURL = "https://nid.naver.com/oauth2.0/authorize?response_type=code";
	    apiURL += String.format("&client_id=%s&redirect_uri=%s&state=%s",
	        Client_Id, redirectURI, state);
	    session.setAttribute("state", state);
	    model.addAttribute("apiURL", apiURL);
	    System.out.println(apiURL);
	    
	    return "loginNaver";
	}
	@RequestMapping(params="type=google")
	public String googleLogin(HttpSession session, Model model) {
		String redirectURI = URLEncoder.encode("http://localhost:8080/login/callback/google");
		String google_client_id = "637540086741-c6k444vhqd1eid2aid6p86hmh4pldpje.apps.googleusercontent.com";
		String google_scope = "https://www.googleapis.com/auth/userinfo.profile";
		
		
		
	    String apiURL = "https://accounts.google.com/o/oauth2/v2/auth?response_type=code&access_type=offline";
	    
	    
	    apiURL += String.format("&client_id=%s&redirect_uri=%s&scope=%s",
	        google_client_id, redirectURI, google_scope);
	    
	    model.addAttribute("apiURL", apiURL);
	    System.out.println(apiURL);
	    
	    return "loginGoogle";
	}
	@RequestMapping(params="type=github")
	public String loginGithub(HttpServletRequest request, Model model) {
		String code = request.getParameter("code");
		System.out.println(code);
		model.addAttribute("github code",code);
		return "loginGithub";
	}
	
	@RequestMapping("/callback/google")
	public String googleCallback(HttpSession session, HttpServletRequest request, Model model) throws IOException, ParseException{
		
		String code = request.getParameter("code");
		String apiurl;
		
		apiurl = "https://oauth2.googleapis.com/token?grant_type=authorization_code";
		apiurl += "&client_id=637540086741-c6k444vhqd1eid2aid6p86hmh4pldpje.apps.googleusercontent.com";
		apiurl += "&client_secret=__BOsppoRfIu-xfU23qyzGit";
		apiurl += "&redirect_uri=http://localhost:8080/login/callback/google";
		apiurl += "&code="+code;
		
		model.addAttribute("url", apiurl);
		
		
		//System.out.print("Get Access Token from Google :"+result);
		
		HashMap<String,String> map = new HashMap<String,String>();
		
		
		map.put("&client_id","637540086741-c6k444vhqd1eid2aid6p86hmh4pldpje.apps.googleusercontent.com");
		map.put("&client_secret", "__BOsppoRfIu-xfU23qyzGit");
		map.put("&redirect_uri", "http://localhost:8080/login/callback/google");
		map.put("&code", code);
		String result = requestToServer("https://oauth2.googleapis.com/token?grant_type=authorization_code",map);
		
		JSONParser paser = new JSONParser(); //JSON Parser객채를 만듭니다. parser를 통해서 파싱을 합니다.
	    try{
	    	JSONObject obj = (JSONObject) paser.parse(result); 
	    	result=(String)obj.get("access_token");
	    }catch(Exception e) {
	    	
	    }
	    
	   
	    String token = result;
	    String header = "Bearer " + token; // Bearer 다음에 공백 추가

        String apiURL = "https://people.googleapis.com/v1/people/me?personFields=locales&key=AIzaSyDpDsCLnD7Z-FINT_3J-72hmWmMPZP9ewI";

        Map<String, String> requestHeaders = new HashMap<>();
        requestHeaders.put("Authorization", header);
        requestHeaders.put("Accept", "application/json");
       
        
        String responseBody = get(apiURL,requestHeaders);

        Object data = new Object();
        try{
	    	JSONObject obj = (JSONObject) paser.parse(responseBody); 
	    	data = obj.get("metadata");
	    }catch(Exception e) {
	    	
	    }
	    
	    
        model.addAttribute("result",responseBody);
        
       
		return "loginGithub";
	}
	
	
	@RequestMapping("/callback")
	public String callBack(HttpSession session, HttpServletRequest request, Model model) throws IOException, ParseException{
		String code = request.getParameter("code");
	    String state = request.getParameter("state");
	    
	   
	    String apiurl;
	    apiurl = "https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&";
	    apiurl += "client_id=" + Client_Id;
	    apiurl += "&client_secret=" + Client_Secret;
	    apiurl += "&redirect_uri=" + "http://visualup.koreacentral.cloudapp.azure.com:8080/login/callback";
	    apiurl += "&code=" + code;
	    apiurl += "&state=" + state;
	    
	    System.out.println(apiurl);
	    String result = requestToServer(apiurl, new HashMap<String,String>());
	    JSONParser paser = new JSONParser(); //JSON Parser객채를 만듭니다. parser를 통해서 파싱을 합니다.
	    try{
	    	JSONObject obj = (JSONObject) paser.parse(result); 
	    	result=(String)obj.get("access_token");
	    }catch(Exception e) {
	    	
	    }
	    
	   
	    String token = result;
	    String header = "Bearer " + token; // Bearer 다음에 공백 추가

        String apiURL = "https://openapi.naver.com/v1/nid/me";

        Map<String, String> requestHeaders = new HashMap<>();
        requestHeaders.put("Authorization", header);
       
        String responseBody = get(apiURL,requestHeaders);

        System.out.println(responseBody);
        Object data = new Object();
        try{
	    	JSONObject obj = (JSONObject) paser.parse(responseBody); 
	    	data = obj.get("response");
	    }catch(Exception e) {
	    	
	    }
        model.addAttribute("result",data);
	    
		return "callback";
	}
	
	public String requestToServer(String apiurl, HashMap < String, String > pList) throws IOException {
		
		URL url = new URL(apiurl);
		HttpURLConnection con = (HttpURLConnection)url.openConnection();
		
		
		con.setRequestMethod("POST");
		con.setDefaultUseCaches(false);
        con.setDoInput(true); // 서버에서 읽기 모드 지정 
        con.setDoOutput(true);
		
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
