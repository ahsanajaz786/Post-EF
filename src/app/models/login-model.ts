import { Injectable } from '@angular/core'
import { FormBuilder,Validators } from '@angular/forms'
@Injectable({
    providedIn: 'root',
  })


export class LoginModel {
    constructor(private formBuilder:FormBuilder){

    }
    login=this.formBuilder.group({
         username: [''],
        password: [''],


    })
}
