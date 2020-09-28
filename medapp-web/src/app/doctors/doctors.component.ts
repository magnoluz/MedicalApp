import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Doctor } from 'src/model/Doctor';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.styl']
})
export class DoctorsComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'specialty'];
  dataSource: Doctor[];
  isLoadingResults: boolean;
  
  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this._api.getDoctors()
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
