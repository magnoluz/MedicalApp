import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Doctor } from 'src/model/doctor';
import { Account } from 'src/model/account';
import { Appointment } from 'src/model/appointment';

@Component({
  selector: 'app-appointment-schedule',
  templateUrl: './appointment-schedule.component.html',
  styleUrls: ['./appointment-schedule.component.styl']
})
export class AppointmentScheduleComponent implements OnInit {

  appointmentForm: FormGroup;
  doctors: Doctor[];
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.appointmentForm = this.formBuilder.group({
      'dateTime' : [null, Validators.required],
      'doctor' : [null, [Validators.required]]
    });

    this.api.getDoctors()
    .subscribe(res => {
      this.doctors = res;
      console.log(this.doctors);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  addAppointment(form: NgForm) {
    
    this.isLoadingResults = true;

    var account: Account;
    account = {
      id: null,
      name: null,
      email: null,
      password: null
    };

    var appointment: Appointment;
    appointment = {
      id: null,
      dateTime: form['dateTime'],
      account: account,
      doctor: form['doctor']
    }

    this.api.scheduleAppointment(appointment)
      .subscribe(resp => this.router.navigate(['/appointments']));
    ;
  }
}
