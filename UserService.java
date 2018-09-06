package com.hsbc.banking.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hsbc.banking.models.ERICUSER;
import com.hsbc.banking.repositories.UserRepository;
@Service
public class UserService {
	@Autowired
	private UserRepository userRepo;
	
	public void saveUser(ERICUSER user)
	{
		userRepo.save(user);//insert query
		
	}
	public void updateUser(ERICUSER user,Long mobileNo)
	{
		userRepo.save(user);//update query	
	}
	public void deleteUser(Long mobileNo)
	{
		userRepo.delete(mobileNo);//update query	
	}

	public List<ERICUSER> getAllUsers()
	{
		List<ERICUSER> userList=new ArrayList<ERICUSER>();
		userRepo.findAll().forEach(userList::add);//select all
		return userList;
	}
	
	public ERICUSER getUserById(Long mobileNo)
	{
		return userRepo.findOne(mobileNo);//select with where 
	}
}
