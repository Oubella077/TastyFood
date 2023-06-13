import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { CartItem } from 'src/app/Models/CartItem';
import { Cartproduct, Product } from 'src/app/Models/Product';
import { Cartservice } from 'src/app/service/Cartservice/cartservice.service';
import { KeycloakSecurityService } from 'src/app/service/keycloak-security.service';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  public products:Product[]=[];
  public product:Product[]=[];
  public cartproducts:any[]=[];
  public p:Product={ } as Product;
  public amount :any;
  searchTerm = '';
  role!:Boolean;
  authenticate?:Boolean;
  subject='';
  errormessage: any;
  page : any= 1;
  count: any= 6;
  total:any =15;
  
  constructor(private service :ProductService,private router:Router,private ser:KeycloakSecurityService,private cartservice:Cartservice) { }

  ngOnInit(): void {
    this.getproducts();
    this.subject!=this.ser.Kc.tokenParsed?.sub;
    console.log(" heyy" + this.ser.Kc.tokenParsed?.sub);
  }
 
getproducts() { 
  this.service.getAllproducts().subscribe( {
    next:(data:Product[])=>{ 
      this.products=data;
      this.product=this.products;
      this.role=this.ser.Kc.hasResourceRole("user");
     this.authenticate= this.ser.Kc.authenticated;
      console.log(data)
    },
    error :(err: { message: any; })=>{console.log(err.message)}
  })
  }

  public search(Keyword : string  ){ 
        this.products=this.product.filter( (val:any)=>val.name.toLowerCase().includes(Keyword) )
      }
  public DeleteProduct(p:Product){
        let conf=confirm("Are you sure");
        if (conf==false) 
        return;     
          this.service.delete(p.id).subscribe( {       
            next :  (data)=>{ this.getproducts();},
            error:  (err: any)=> {console.error(err)}     
            }
           )
         }
        // .subscribe({
          //   next : (data)=>{
          //   //this.handlegetAllproducts();
          //   let index=this.products.indexOf(p);
          //   this.products.splice(index,1);
          //   this.total--;
          // }})   

public get(id:number){
   this.p!=this.products.find(e=>e.id=id);
  // this.service.getproduct(i).subscribe({
  //  next:   (data)=>{this.p=data },
     
  //  error: (err: any)=> {console.error(err)}
  // } )
}
public favorit(p:Product){
  if(p.isFavorite){
  p.isFavorite=false;
   return;}
  p.isFavorite=true;
  // this.service.setfavorite(p).subscribe( { 
  //   next :(data:any)=>{ p.isFavorite=!promo;},
  //   error :( err) =>{this.errormessage=err; } 
  //  }  
  // )
}
addtocart(product:Product,index:number){ 
  let cusid=this.ser.Kc.hasResourceRole("user");
  let item:CartItem={id:index,
    idproduct:product.id,emailcus:this.ser.Kc.tokenParsed?.sub,quantity:1,
  };
this.cartservice.Addproduct(item).subscribe( { 
  next :(data:any)=>{prompt("produt added to cart");},

  error :( err) =>{this.errormessage=err; } 
 }  
)
}

add(product: Product){
  if("cart" in localStorage){
   this.cartproducts=JSON.parse(localStorage.getItem("cart")!);
   let exist =this.cartproducts.find(item=>item.item.id==product.id)
   if(exist)
     alert("This product exist Already in your cart")
   else{ 
    let p :Cartproduct={item:product,quantity:1}
     this.cartproducts.push(p);
     localStorage.setItem("cart",JSON.stringify(this.cartproducts));
   }
 }
 else{
   this.cartproducts.push(product);
   localStorage.setItem("cart",JSON.stringify(this.cartproducts));
 }
 }

 onpageChange(event: any) {
  this.page = event;
  
}

}