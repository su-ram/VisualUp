<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>페이스북으로 공유하기</title>
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '710889353118162',
      cookie     : true,
      xfbml      : true,
      version    : 'v8.0'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  FB.login();
  FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
  });

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
</script>
</head>
<body>
<fb:login-button 
  scope="public_profile,email"
  onlogin="checkLoginState();">
</fb:login-button>

<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v8.0&appId=710889353118162&autoLogAppEvents=1" nonce="JaRyevbm"></script>

<div class="fb-share-button" data-href="https://visualup.koreacentral.cloudapp.azure.com:8080" data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fvisualup.koreacentral.cloudapp.azure.com%3A8080%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">공유하기</a></div>
<script>
FB.ui({
    display: 'popup',
    method: 'share_open_graph',
    action_type: 'og.likes',
    action_properties: JSON.stringify({
        object:'https://developers.facebook.com/docs/',
    })
  }, function(response){});
</body>
</html>

