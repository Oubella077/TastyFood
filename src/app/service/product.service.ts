import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private http:HttpClient) { }
  host =environment.host;

  public getAllproducts():Observable <Product[]> { 

    return this.http.get<Product[]>(this.host +'/products' )
    }


 public searchproducts(Keyword : string  ):Observable <Product> { 
      return this.http.get <Product>(this.host +'/products?name_Like='+Keyword )
      }

 Createproduct(product:Product):Observable<Product>{ 
        return this.http.post<Product>(this.host + "/products/" , product)
       }

public delete(id:number):Observable<void>{
        return this.http.delete<void>(this.host+"/products/"+id);
     }

 public editproduct(product:Product,productId:number):Observable<Product> { 
  return this.http.put<Product>(this.host + "/products/"+ productId, product)
 }

 public getproduct(productId:number):Observable<Product>{ 
  return this.http.get<Product>(this.host + "/products/"+ productId)
 }

 public setfavorite(product:Product):Observable<Product>{
  return this.http.put<Product>(this.host +"/products/"+product.id,{...product,isFavorite:!product.isFavorite});
}
}





