import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Account } from 'src/model/account';

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.styl']
})
export class AccountLoginComponent implements OnInit {

  accountForm: FormGroup;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    this.api.logoutAccount();
    
    this.accountForm = this.formBuilder.group({
      'email' : [null, Validators.required],
      'password' : [null, [Validators.required]]
    });
  }

  login(form: NgForm) {
    
    this.api.loginAccount(form['email'], form['password'])
    .subscribe(res => {
      
      if(res != null) {
        //console.log('Usuario ' + res[0].name + ' logado');
        this.router.navigate(['/appointments']);
      } else alert('Usuario nao Encontrado!');
    }, err => {
      alert('Usuario nao Encontrado!');
      console.log(err);
    });
  }

  registerAccount() : void {
    this.router.navigate(['/accountInsert']);
  }
}
