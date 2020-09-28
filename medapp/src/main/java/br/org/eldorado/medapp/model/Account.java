package br.org.eldorado.medapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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

@Entity(name = "ACCOUNT")
public class Account {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ACC_ID", nullable = false)
	public Long id;
	
	@NonNull
	@Column(name = "ACC_NAME", nullable = false, unique = true, length = 120)
	public String name;
	
	@NonNull
	@Column(name = "ACC_EMAIL", nullable = false, length = 120)
	public String email;
	
	@NonNull
	@Column(name = "ACC_PASSWORD", nullable = false, length = 20)
	public String password;
	
	
	public Account(Long id) {
		this.id = id;
	}
}