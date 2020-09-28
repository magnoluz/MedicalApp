package br.org.eldorado.medapp.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.org.eldorado.medapp.model.Appointment;

@Repository
public interface AppointmentRepository extends CrudRepository<Appointment, Long> {
	
	public List<Appointment> findByAccountId(Long accountId);
}
