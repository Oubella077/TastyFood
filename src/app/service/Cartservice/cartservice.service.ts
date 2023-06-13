import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem, CartListe } from 'src/app/Models/CartItem';
import { Product } from 'src/app/Models/Product';
import { environment } from 'src/environments/environment';
import { KeycloakSecurityService } from '../keycloak-security.service';

@Injectable({
  providedIn: 'root'
})
export class Cartservice {

  constructor(private http:HttpClient,private service:KeycloakSecurityService) { }

  host =environment.host;
  
  public getcartproducts():Observable <CartListe> { 
    
    return this.http.get<CartListe>(this.host + "/cart/Liste",
    {headers:new HttpHeaders({ Authorization:'Bearer ' +this.service.Kc.token}) })
    }


// add a produc to cart
 public Addproduct(cartitem:CartItem):Observable<Product>{ 
        return this.http.post<Product>( this.host+"/cart/add" , cartitem,
        {headers:new HttpHeaders({ Authorization:'Bearer ' +this.service.Kc.token}) })
       }

  // Delete cartItem     
  public deletecartItem(idd:number){
        return this.http.delete<String>(this.host+"/cart/delete/"+idd,
        {headers:new HttpHeaders({ Authorization:'Bearer ' +this.service.Kc.token}) });
     }
      }