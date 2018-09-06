package com.hsbc.banking.models;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ERIC_USER")
public class ERICUSER {
	@Id
	private long mobileNo;	
	@Column(name="FIRSTNAME",nullable=false)
	private String firstName;
	@Column(name="LASTNAME",nullable=false)
	private String lastName;
	@Column(name="DOB",nullable=false)
	private LocalDate dob;
	@Column(name="EMAIL",nullable=false)
	private String email;
	@Column(name="COUNTRY",nullable=false)
	private String country;
	@Column(name="STATE",nullable=false)
	private String state;
	@Column(name="GENDER",nullable=false)
	private String gender;
	public long getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(long mobileNo) {
		this.mobileNo = mobileNo;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public LocalDate getDob() {
		return dob;
	}
	public void setDob(LocalDate dob) {
		this.dob = dob;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	
	

}
