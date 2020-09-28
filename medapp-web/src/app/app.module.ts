import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowIfLoggedDirective } from '../directives/showIfLogged.directive';
import { MenuComponent } from './menu/menu.component';
import { AccountLoginComponent } from './account-login/account-login.component';
import { AccountInsertComponent } from './account-insert/account-insert.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentScheduleComponent } from './appointment-schedule/appointment-schedule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ShowIfLoggedDirective,
    MenuComponent,
    AccountInsertComponent,
    AccountLoginComponent,
    DoctorsComponent,
    AppointmentsComponent,
    AppointmentScheduleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,  
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule, 
    MatSelectModule,
    MatSidenavModule,  
    MatTableModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
