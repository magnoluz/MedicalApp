package br.org.eldorado.medapp.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.org.eldorado.medapp.model.Doctor;

@Repository
public interface DoctorRepository extends CrudRepository<Doctor, Long> {
	
	@Override
	public List<Doctor> findAll();
}
