import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Account } from 'src/model/Account';
import { Doctor } from 'src/model/doctor';
import { Appointment } from 'src/model/appointment';

const httpHeaderJsonType = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const httpHeaderFormType = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
};

const apiUrl = 'http://localhost:8080/MedicalApp/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private situacaoLoginAccount = new BehaviorSubject<boolean>(false);
  private accountLogged : Account;

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

  getSituacaoLoginAccount() {
    return this.situacaoLoginAccount.asObservable();
  }

  loginAccount(email : string, password : string) : Observable<Account[]> {
    
    var body = 'email='+email+'&password='+password;

    return this.http.post<Account[]>(apiUrl + 'loginAccount', body, httpHeaderFormType)
    .pipe(
        tap(resp => {
          if(resp != null) {
            
            this.accountLogged = resp[0];
            this.situacaoLoginAccount.next(true);
            
            console.log('logou '+this.accountLogged.name); 
          }
        }),
        catchError(this.handleError('getDoctors', []))
    );
  }

  logoutAccount() {
    this.situacaoLoginAccount.next(false);
  }

  registerAccount(account : Account) {

    var body = 'name='+account.name+'&email='+account.email+'&password='+account.password;
    
    this.http.post<any>(apiUrl + 'insertAccount', body, httpHeaderFormType)
      .subscribe({
        error: error => console.error('There was an error!', error)
      });
  }

  getDoctors() : Observable<Doctor[]> {
    return this.http.post<Doctor[]>(apiUrl + 'listAllDoctors', httpHeaderJsonType)
      .pipe(
        tap(resp => console.log('listou os medicos')),
        catchError(this.handleError('getDoctors', []))
      );
  }

  getAppointmentsByAccount() : Observable<Appointment[]> {

    var body = 'accountId=' + this.accountLogged.id;

    return this.http.post<Appointment[]>(apiUrl + 'findAppointmentsByAccount', body, httpHeaderFormType)
      .pipe(
        tap(resp => console.log('listou as consultas')),
        catchError(this.handleError('getAppointmentsByAccount', []))
      );
  }

  scheduleAppointment(appointment : Appointment) : Observable<Appointment[]> {

    var body = 'dateTime='+appointment.dateTime+'&accountId='+this.accountLogged.id+'&doctorId='+appointment.doctor.id;
    
    return this.http.post<Appointment[]>(apiUrl + 'scheduleAppointment', body, httpHeaderFormType)
      .pipe(
        tap(resp => console.log('agendou a consulta')),
        catchError(this.handleError('scheduleAppointment', []))
      );
  }
}