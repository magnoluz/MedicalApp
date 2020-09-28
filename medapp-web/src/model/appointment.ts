import { Doctor } from './doctor';
import { Account } from './account';

export class Appointment {
    id: number;
    dateTime: Date;
    doctor: Doctor;
    account: Account;
  }