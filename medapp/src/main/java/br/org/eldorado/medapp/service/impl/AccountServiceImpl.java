package br.org.eldorado.medapp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.org.eldorado.medapp.model.Account;
import br.org.eldorado.medapp.repository.AccountRepository;
import br.org.eldorado.medapp.service.AccountService;

@Service
public class AccountServiceImpl implements AccountService {

	
	@Autowired
	private AccountRepository accountRepository;
	
	
	@Override
	public void insertAccount(String name, String email, String password) {
		accountRepository.save(new Account(name, email, password));
	}

	@Override
	public Account findAccountByName(String name) {
		
		List<Account> accounts = accountRepository.findByName(name);
		
		Account result = null;
		if(accounts != null && accounts.size() > 0)
			result = accounts.get(0);
			
		return result;
	}

	@Override
	public List<Account> findAccountByEmailAndPassword(String email, String password) {
		return accountRepository.findByEmailAndPassword(email, password);
	}
}
