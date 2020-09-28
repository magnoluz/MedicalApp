import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Appointment } from 'src/model/appointment';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.styl']
})
export class AppointmentsComponent implements OnInit {

  displayedColumns: string[] = [ 'dateTime', 'doctor.name', 'account.name'];
  dataSource: Appointment[];
  isLoadingResults: boolean;
  
  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this._api.getAppointmentsByAccount()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
