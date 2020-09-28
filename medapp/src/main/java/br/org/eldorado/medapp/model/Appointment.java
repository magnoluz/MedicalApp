package br.org.eldorado.medapp.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@RequiredArgsConstructor
@Getter @Setter
@ToString

@Entity(name = "APPOINTMENT")
public class Appointment {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "APP_ID", nullable = false)
	private Long id;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy HH:mm")
	@NonNull
	@Column(name = "APP_DATE_TIME", nullable = false)
	private Date dateTime;
	
	@NonNull
	@ManyToOne
	@JoinColumn(columnDefinition = "ACC_ID", nullable = false)
	private Account account;
	
	@NonNull
	@ManyToOne
	@JoinColumn(columnDefinition = "DOC_ID", nullable = false)
	private Doctor doctor;
}