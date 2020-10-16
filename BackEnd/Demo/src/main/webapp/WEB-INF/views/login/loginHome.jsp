<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>소셜로그인 페이지</title>
</head>
<body>
<br><br>
<a href ="${loginURL.kakao}">카카오 계정으로 로그인하기</a><br>
<a href ="${loginURL.google}">구글 계정으로 로그인하기</a><br>
<a href ="${loginURL.github}">깃허브 계정으로 로그인하기</a><br>
if you are logged in here, then your userid is ${userid}<br>
if nothing is showed up there, you are newbie ^o^ welcome :) <br>
</body>
</html>