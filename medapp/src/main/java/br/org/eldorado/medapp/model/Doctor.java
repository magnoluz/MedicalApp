package br.org.eldorado.medapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter @Setter
@ToString

@Entity(name = "DOCTOR")
public class Doctor {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "DOC_ID", nullable = false)
	private Long id;
	
	@Column(name = "DOC_NAME", nullable = false, unique = true, length = 120)
	private String name;
	
	@Column(name = "DOC_SPECIALTY", nullable = false, length = 120)
	private String specialty;
	
	
	public Doctor(Long id) {
		this.id = id;
	}
}