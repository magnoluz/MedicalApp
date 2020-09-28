package br.org.eldorado.medapp.service;

import java.util.Date;
import java.util.List;

import br.org.eldorado.medapp.model.Appointment;
import br.org.eldorado.medapp.model.Doctor;

public interface MedicalService {

	public List<Doctor> listAllDoctors();
	
	public void insertAppointment(Date dateTime, Long doctorId, Long accountId);
	
	public List<Appointment> findAppointmentsByAccount(Long accountId);
}
