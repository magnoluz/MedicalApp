import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Account } from 'src/model/account';

@Component({
  selector: 'app-account-insert',
  templateUrl: './account-insert.component.html',
  styleUrls: ['./account-insert.component.styl']
})
export class AccountInsertComponent implements OnInit {

  accountForm: FormGroup;
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.accountForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'email' : [null, [Validators.required]],
      'password' : [null, [Validators.required]],
    });
  }

  addAccount(form: NgForm) {
    
    this.isLoadingResults = true;

    var account: Account;
    account = {
      id: null,
      name: form['name'] + '',
      email: form['email'],
      password: form['password']
    };

    this.api.registerAccount(account);
    
    this.router.navigate(['/accountLogin']);
  }
}
