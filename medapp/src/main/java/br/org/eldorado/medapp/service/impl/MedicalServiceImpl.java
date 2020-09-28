package br.org.eldorado.medapp.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.org.eldorado.medapp.model.Account;
import br.org.eldorado.medapp.model.Appointment;
import br.org.eldorado.medapp.model.Doctor;
import br.org.eldorado.medapp.repository.AppointmentRepository;
import br.org.eldorado.medapp.repository.DoctorRepository;
import br.org.eldorado.medapp.service.MedicalService;

@Service
public class MedicalServiceImpl implements MedicalService {

	
	@Autowired
	private DoctorRepository doctorRepository;
	
	@Autowired
	private AppointmentRepository appointmentRepository;
	
	
	@Override
	public List<Doctor> listAllDoctors() {
		return doctorRepository.findAll();
	}

	@Override
	public void insertAppointment(Date dateTime, Long accountId, Long doctorId) {
		appointmentRepository.save(new Appointment(dateTime, new Account(accountId), new Doctor(doctorId)));
	}

	@Override
	public List<Appointment> findAppointmentsByAccount(Long accountId) {
		return appointmentRepository.findByAccountId(accountId);
	}
}
