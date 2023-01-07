// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/app/Models/user';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public U: boolean = false;
  public users: user[] = [];
  constructor(public formbuilder: FormBuilder, public service: ProductService, public router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group(
      {
        "id": [''],
        "Fullname": [''],
        "age": [''],
        "gender": [''],
        "email": [''],
        "password": [''],
        "phone": [''],
        "address": ['']
      })
  }

  login() {
    this.service.getusers().subscribe({
      next: (data: user[]) => {
        console.log(this.loginForm.value.email)
        this.users = data;
      
      const u=  this.users.find((a: user) => (a.email == this.loginForm.value.email )
          //  if( a.email === this.loginForm.value.email && a.password === this.loginForm.value.password)   {                  
          // this.U = true;
          // return (a.email === this.loginForm.value.email && a.password === this.loginForm.value.password)
          //  this.U.email=this.loginForm.value.email;
          //  this.U.password=this.loginForm.value.password;
        )
      }
    });
    console.log("hello" + u)
    if (u) {
      alert("WelcomebacK Mr " + this.loginForm.value.Fullname);
      console.log(this.loginForm.value.Fullname)
      this.loginForm.reset();
      this.router.navigate(['/produts'])
    }
    else { alert("User not Found" + this.loginForm.value.Fullname + "yup"); }
    console.log("here is the end")
  }
}