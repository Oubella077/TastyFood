import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakSecurityService } from 'src/app/service/keycloak-security.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http:HttpClient, public keycloakservice:KeycloakSecurityService, private route:Router,private service: ProductService ) { }

ngOnInit(): void {
  }
Onlogout(){ 
    this.keycloakservice.Kc.logout()     
  }
Onlogin(){ 
    this.keycloakservice.Kc.login();
    console.log(this.keycloakservice.Kc.token);
  }
Setting(){ 
    this.keycloakservice.Kc.accountManagement();
  }
Signup(){
    this.keycloakservice.Kc.register()  
  }
}
