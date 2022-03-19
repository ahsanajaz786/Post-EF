import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/models/login-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="admin@admin.com"
  password="12345"
  constructor(private router:Router,public loginModel:LoginModel) {

    this.loginModel.login.reset()
  }

  ngOnInit() {
  }
  login(){

    if(this.loginModel.login.controls['username'].value==this.username
    && this.loginModel.login.controls['password'].value==this.password
    ){

      this.router.navigate(['bill'])
    }else{
      alert('invalid user')
    }

  }

}
