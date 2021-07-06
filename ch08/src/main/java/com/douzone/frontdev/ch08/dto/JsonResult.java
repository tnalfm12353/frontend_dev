package com.douzone.frontdev.ch08.dto;

import java.util.List;

public class JsonResult {
	private String result;	/* "success" or "fail" */
	private Object data;	/* if success, Data Set */
	private String message;	/* if fail, message set */
	private List<Object> dataList;
	
	
	private JsonResult() {}
	private JsonResult(Object data) {
		result = "success";
		this.data = data;
	}
	private JsonResult(List<Object> dataList) {
		result = "success";
		this.dataList = dataList;
	}
	
	private JsonResult(String message) {
		result = "fail";
		this.message = message;
	}
	
	public String getResult() {
		return result;
	}
	
	public Object getData() {
		return data;
	}
	
	public List<Object> getDataList(){
		return dataList;
	}
	
	public String getMessage() {
		return message;
	}

	public static JsonResult success(List<Object> dataList) {
		return new JsonResult(dataList);
	}
	
	public static JsonResult success(Object data) {
		return new JsonResult(data);
	}
	
	public static JsonResult fail(String message) {
		return new JsonResult(message);
	}
}