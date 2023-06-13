import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {
public Kc!:Keycloak ;
  constructor() { }

 async init(){ 
    console.log("Security initialisation ....");
    this.Kc=new Keycloak({ 
      url: 'http://localhost:8180',
      realm: 'SpringBootKeycloak',
      clientId: 'Foodapp-client'
    })
  await this.Kc.init(
    { 
      onLoad: 'check-sso'
  });
  console.log(this.Kc);

  }
}
