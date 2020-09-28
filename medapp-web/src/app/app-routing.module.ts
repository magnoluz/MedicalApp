import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountLoginComponent } from './account-login/account-login.component';
import { AccountInsertComponent } from './account-insert/account-insert.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentScheduleComponent } from './appointment-schedule/appointment-schedule.component';

const routes: Routes = [
  {
    path: '',
    component: AccountLoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'accountLogin',
    component: AccountLoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'accountInsert',
    component: AccountInsertComponent,
    data: { title: 'Adicionar Conta' }
  },
  {
    path: 'doctors',
    component: DoctorsComponent,
    data: { title: 'Lista de Médicos' }
  },
  {
    path: 'appointments',
    component: AppointmentsComponent,
    data: { title: 'Lista de Consultas' }
  },
  {
    path: 'appointmentSchedule',
    component: AppointmentScheduleComponent,
    data: { title: 'Agendar Consulta' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
