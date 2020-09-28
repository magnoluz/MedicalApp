package br.org.eldorado.medapp.control;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.org.eldorado.medapp.model.Account;
import br.org.eldorado.medapp.model.Appointment;
import br.org.eldorado.medapp.model.Doctor;
import br.org.eldorado.medapp.service.AccountService;
import br.org.eldorado.medapp.service.MedicalService;

@RestController
@RequestMapping("/")
public class MainController {

	
	@Autowired
	private AccountService accountService;
	
	@Autowired
	private MedicalService medicalService;
	
	
	// Account
	
	@ResponseStatus(value = HttpStatus.CREATED)
	@RequestMapping(value = "/insertAccount", method = RequestMethod.POST)
	public void insertAccount(String name, String email, String password) {
		accountService.insertAccount(name, email, password);
	}
	
	@RequestMapping(value = "/findAccountByName", method = RequestMethod.POST)
	public Account findAccountByName(String name) {
		return accountService.findAccountByName(name);
	}
	
	@RequestMapping(value = "/loginAccount", method = RequestMethod.POST)
	public List<Account> loginAccount(String email, String password) {
		return accountService.findAccountByEmailAndPassword(email, password);
	}
	
	// Doctor
	
	@RequestMapping(value = "/listAllDoctors", method = RequestMethod.POST)
	public List<Doctor> listAllDoctors() {
		return medicalService.listAllDoctors();
	}
	
	
	// Appointments
	
	@RequestMapping(value = "/findAppointmentsByAccount", method = RequestMethod.POST)
	public List<Appointment> findAppointmentsByAccount(Long accountId) {
		return medicalService.findAppointmentsByAccount(accountId);
	}
	
	@RequestMapping(value = "/scheduleAppointment", method = RequestMethod.POST)
	public void scheduleAppointment(@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm") Date dateTime, Long accountId, Long doctorId) {
		medicalService.insertAppointment(dateTime, accountId, doctorId);
	}
}
