<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<script>
	// DOM Load Event
	//	1. load : 모두다 (DOM, CSSom, Image) 완료
	//	2. DOMContentLoaded : DOM만 다 완성(CSSom x, Image x)
	window.addEventListener("DOMContentLoaded", function(){
		document.getElementsByTagName("button")[0]
				.addEventListener("click", function(){
					// xmlHttpRequest
					let xhr = null;
					if(window.ActiveXObject){ //<= IE6 버전
						xhr = new ActiveXObject("Microsoft.XMLHTTP");
					} else if(window.XMLHttpRequest) {				 // Other Standards and IE7 
						xhr = new XMLHttpRequest(); 
					} else {
						console.log("Ajax 기능을 사용할 수 없습니다.");
						return;
					}
					
					xhr.addEventListener("readystatechange", function() {
						if(this.readyState == XMLHttpRequest.UNSENT){
							// request 초기화 되기 전
							console.log("State UNSENT : "+ this.readyState);
						} else if(this.readyState == XMLHttpRequest.OPENED){
							// 서버와 연결이 성공
							console.log("State OPENED : "+ this.readyState);
						} else if(this.readyState == XMLHttpRequest.HEADERS_RECEIVED){
							// 서버가 Request을 받음
							console.log("State HEADERS_RECEIVED : "+ this.readyState);
						} else if(this.readyState == XMLHttpRequest.LOADING){
							// response 처리 중
							console.log("State LOADING : "+ this.readyState);
						} else if(this.readyState == XMLHttpRequest.DONE){
							// response 처리 완료
							console.log("State DONE : "+ this.readyState);
							
							if(this.status != 200) {
								console.log(this.status);
								return;
							}
							
							console.log(typeof(this.responseText));
							console.log(this.responseText);
							
							const response = JSON.parse(this.responseText);
							
							let html = "";
							html += ("<h4>" + response.data.id + "</h4>");
							html += ("<h5>" + response.data.name + "</h5>");
							html += ("<p>" + response.data.message + "</p>");
							document.getElementById("data").innerHTML = html;
						}
					})
					xhr.open("GET", "${pageContext.request.contextPath}/api/json", true);
					xhr.send();
				});
	});
</script>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>AJAX Test - XmlHttpRequest</h1>
	<button>데이터 가져오기</button>
	<div id="data"></div>
</body>
</html>