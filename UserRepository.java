package com.hsbc.banking.repositories;

import org.springframework.data.repository.CrudRepository;

import com.hsbc.banking.models.ERICUSER;


public interface UserRepository extends CrudRepository<ERICUSER,Long>{

}
