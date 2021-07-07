package com.douzone.frontdev.ch08.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.douzone.frontdev.ch08.dto.JsonResult;
import com.douzone.frontdev.ch08.vo.GuestbookVo;

@Controller
@RequestMapping("/guestbook/api")
public class GuestbookApiController {

	@ResponseBody
	@RequestMapping("/list")
	public JsonResult ex1() {
		List<GuestbookVo> list = new ArrayList<GuestbookVo>();
		GuestbookVo vo1 = new GuestbookVo();
		vo1.setId(3L);
		vo1.setName("홍");
		vo1.setMessage("gdgd");
		list.add(vo1);
		
		GuestbookVo vo2 = new GuestbookVo();
		vo2.setId(1L);
		vo2.setName("홍1");
		vo2.setMessage("gdgd1");
		list.add(vo2);
		GuestbookVo vo3 = new GuestbookVo();
		vo3.setId(2L);
		vo3.setName("홍2");
		vo3.setMessage("gdgd2");
		list.add(vo3);
		return JsonResult.success(list);
	}
	
	@ResponseBody
	@RequestMapping("/add")
	public JsonResult ex2(@RequestBody GuestbookVo vo) {
		// 등록 작업 (GuestbookService)
		vo.setId(11L);
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping("/delete/{id}")
	public JsonResult ex3(@PathVariable Long id, String password) {
		// 삭제 작업 (GuestbookService)
		Long data = 0l;
		
		// 1. 삭제가 안된 경우
//		data = -1l;
		
		// 1. 삭제가 성공한 경우
		data = id;
		
		return JsonResult.success(data);
	}
}
