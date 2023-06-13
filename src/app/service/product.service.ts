import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';
import { user } from '../Models/user';
import { KeycloakSecurityService } from './keycloak-security.service';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private http:HttpClient, private service:KeycloakSecurityService) { }
  host =environment.host;
  
  public getAllproducts():Observable <Product[]> { 
    return this.http.get<Product[]>(this.host+"/products/liste")
    }
 public searchproducts(Keyword : string  ):Observable <Product> { 
      return this.http.get <Product>(this.host +'/products?name_Like='+Keyword )
      }
// add a product
 Createproduct(product:Product):Observable<Product>{ 
        return this.http.post<Product>( this.host+"/products/create" , product)
       }
//  delete product
public delete(id:number){
        return this.http.delete<String>("http://localhost:8080/products/delete/"+id);
     }
//  update product
 public editproduct(product:Product,productId:number):Observable<Product> { 
  return this.http.put<Product>(this.host+"http://localhost:8080/products/update/"+ productId, product)
 }
//  Get product
 public getproduct(productId:number):Observable<Product>{ 
  return this.http.get<Product>(this.host + "/products/"+ productId)
 }

 public setfavorite(product:Product):Observable<Product>{
  return this.http.put<Product>(this.host +"/products/"+product.id,{...product,isFavorite:!product.isFavorite});
}
// user services
// Add User
public CreateUser():Observable<any>{ 
  return this.http.get<String>(this.host + "/categorie/login")
 }

public getusers():Observable<user[]>{
  return this.http.get<user[]>(this.host + "/users")
}
}





