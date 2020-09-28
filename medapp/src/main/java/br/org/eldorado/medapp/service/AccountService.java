package br.org.eldorado.medapp.service;

import java.util.List;

import br.org.eldorado.medapp.model.Account;

public interface AccountService {

	public void insertAccount(String name, String email, String password); 
	
	public Account findAccountByName(String name);
	
	public List<Account> findAccountByEmailAndPassword(String email, String password);
}
