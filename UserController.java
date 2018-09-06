package com.hsbc.banking.controllers;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hsbc.banking.models.ERICUSER;

import com.hsbc.banking.service.UserService;

@RestController
public class UserController {
	@Autowired
	private UserService userService;

	@RequestMapping(value="/",method=RequestMethod.GET)
	public @ResponseBody String index()
	{
		return "Welcome to Spring Boot Application";
	}
	@CrossOrigin(origins = "*")
	@RequestMapping(value="/addUser",method=RequestMethod.POST,produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody HashMap<String,String> addUser(@RequestBody ERICUSER user)
	{
		System.out.println(user.getFirstName());
		
		userService.saveUser(user);
		HashMap<String,String> hashMap=new HashMap<String,String>();
		hashMap.put("message", "User Added");
		return hashMap;
	}
	@CrossOrigin(origins = "*")
	@RequestMapping(value="/getAllEvents",method=RequestMethod.GET)
	public @ResponseBody List<ERICUSER> getAllUsers()
	{
		return userService.getAllUsers();
		
	}
}
