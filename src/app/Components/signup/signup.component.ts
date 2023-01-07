import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';
import { user } from 'src/app/Models/user';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm !: FormGroup;
  submitted = false;
  Sucsses = false;
  constructor(private formbuilder: FormBuilder, public service: ProductService, public router: Router) { }
  ngOnInit(): void {
    this.signupForm = this.formbuilder.group(
      {
        "id": [''],
        "name": ['',[Validators.required]],
        "age": ['',[Validators.required]],
        "gender": ['',],
        "email": ['',[Validators.required]],
        "password": ['',],
        "phone": ['',],
        "address": ['',]})}

  public signup() {
    this.submitted=true;
    
    if(this.signupForm.invalid) {
      return
    }
      this.service.CreateUser(this.signupForm.value).subscribe({
      next: (data: user) => {
        this.Sucsses=true;
        this.signupForm.reset();
        
      },
      error: (err) => alert("something went Wrong")
    }
    )
  }
 
}
