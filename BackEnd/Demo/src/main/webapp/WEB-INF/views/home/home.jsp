<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>메인 페이지</title>
</head>
<body>
${main_page}<br>
${result}<br>
<a href="/logout">로그아웃하기</a><br>
${session}<br>
당신의 회원번호는?? ${userid }<br>
로그아웃 : ${logout}<br>

<form action="http://visualup.koreacentral.cloudapp.azure.com/goal/hashtag" method="get">
<input type="text" name = "name">
<input type="submit">
</form>
</body>

</html>