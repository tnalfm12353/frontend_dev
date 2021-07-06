package com.douzone.frontdev.ch08.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.douzone.frontdev.ch08.dto.JsonResult;
import com.douzone.frontdev.ch08.dto.XmlResult;
import com.douzone.frontdev.ch08.vo.GuestbookVo; 

@Controller
@RequestMapping("/api")
public class ApiController {

	@ResponseBody
	@RequestMapping("/text")
	public String text() {
		return "Text 데이터";
	}
	
	@ResponseBody
	@RequestMapping("/html")
	public String html() {
		return "<h1>AJAX 연습</h1><p>HTML 데이터</p>";
	}
	
	@ResponseBody
	@RequestMapping("/xml")
	public Object xml() {
		XmlResult.GuestbookVo vo = new XmlResult.GuestbookVo();
		vo.setId(1L);
		vo.setName("둘리");
		vo.setMessage("gdgd");
		
		return XmlResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping("/json")
	public Object json() {
		GuestbookVo vo = new GuestbookVo();
		vo.setId(1L);
		vo.setName("둘리");
		vo.setMessage("gdgd");
		
		return JsonResult.success(vo);
	}
}
