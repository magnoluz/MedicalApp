package br.org.eldorado.medapp.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.org.eldorado.medapp.model.Account;

@Repository
public interface AccountRepository extends CrudRepository<Account, Long> {
	
	public List<Account> findByName(String name);
	
	public List<Account> findByEmailAndPassword(String email, String password);
}
