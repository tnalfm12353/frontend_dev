<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath}/jquery/jquery-3.6.0.js " type="text/javascript"></script>
<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script type="text/javascript">
	const fetch = () => {
			$.ajax({
				url: "${pageContext.request.contextPath}/guestbook/api/list",
				dataType: "json",  	// 받을 때 포맷
				type: "get",		// 요청 method
				success: function(response) {
					response.data.forEach((vo)=>{
						console.log(vo);
						html = 
							"<li data-no='" + vo.id +"'>"+
							"<strong>" + vo.name + "</strong>" + 
							"<p>" + vo.message + "</p>" +
							"<strong></strong> <a href='' data-no='"+ vo.id +"'>삭제</a></li>"
						$("#list-guestbook").append(html);
					})
				}
			})
			
		};
		
	$(()=>{
		$("#add-form").submit((event) => {
			event.preventDefault();
			
			vo = {	}
			
			// valiation
			vo.name = $("#input-name").val();
			if(vo.name == "") {
				$("#dialog-message").dialog({
					modal: true,
					buttons: {
						"확인": function() {
							$(this).dialog("close");
						}
					}
				});
				return ;
			}
			
			vo.password = $("#input-password").val();
			
			vo.message = $("#tx-content").val();
			
	
			
			$.ajax({
				url: "${pageContext.request.contextPath}/guestbook/api/add",
				async: true,
				dataType: "json",  	// 받을 때 포맷
				type: "post",		// 요청 method
				contentType: "application/json",
				data: JSON.stringify(vo),
				success: function(response) {
					console.log(response);
					
					var vo = response.data;
					
					html =
						"<li data-no='" + vo.no + "'>" + 
							"<strong>" + vo.name + "</strong>" +
							"<p>" + vo.message + "</p>" +
							"<strong></strong>" + 
							"<a href='' data-no='" + vo.no + "'>삭제</a>" + 
						"</li>";
						
					$("#list-guestbook").prepend(html);	
				}
			});
		});
	});
</script>
</head>
<body>
	<div id="guestbook">
				<h1>방명록</h1>
				<form id="add-form" action="" method="post">
					<input type="text" id="input-name" placeholder="이름">
					<input type="password" id="input-password" placeholder="비밀번호">
					<textarea id="tx-content" placeholder="내용을 입력해 주세요."></textarea>
					<input type="submit" value="보내기" />
				</form>
				<ul id="list-guestbook">

					<li data-no=''>
						<strong>지나가다가</strong>
						<p>
							별루입니다.<br>
							비번:1234 -,.-
						</p>
						<strong></strong>
						<a href='' data-no=''>삭제</a> 
					</li>
					
					<li data-no=''>
						<strong>둘리</strong>
						<p>
							안녕하세요<br>
							홈페이지가 개 굿 입니다.
						</p>
						<strong></strong>
						<a href='' data-no=''>삭제</a> 
					</li>

					<li data-no=''>
						<strong>주인</strong>
						<p>
							아작스 방명록 입니다.<br>
							테스트~
						</p>
						<strong></strong>
						<a href='' data-no=''>삭제</a> 
					</li>
					
									
				</ul>
				<div style="margin: 20px 0 0 0">
					<button id="btn-fetch">다음 가져오기</button>
				</div>
			</div>
			<div id="dialog-message" title="예제" style="display:none">
  				<p>하위 ^^</p>
			</div>
</body>
</html>