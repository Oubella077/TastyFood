import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  public products:Product[]=[];
  public product:Product[]=[];
  public cartproducts:Product[]=[];
  public p:Product={ } as Product;
  searchTerm = '';
  errormessage: any;
  page : any= 1;
  count: any= 6;
  total:any =15;
  constructor(private service :ProductService) { }

  ngOnInit(): void {
    this.getproducts();
  }
 
getproducts() { 
  this.service.getAllproducts().subscribe( {

    next:(data:any)=>{ 
      this.products=data;
      this.product=this.products;
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
        if (conf==false) return;
        this.service.delete(p.id).subscribe({
          next : (data)=>{
          //this.handlegetAllproducts();
          let index=this.products.indexOf(p);
          this.products.splice(index,1);
          this.total--;
        }})
      }    
public get(i:number){
  if(i)
  this.service.getproduct(i).subscribe({
   next:   (data)=>{this.p=data },
     
   error: (err: any)=> {console.error(err)}
  } )}
public favorit(p:Product){
  let promo=p.isFavorite;
  this.service.setfavorite(p).subscribe( { 

    next :(data:any)=>{ p.isFavorite=!promo;},

    error :( err) =>{this.errormessage=err; } 
   }  
  )
}
add(product:Product){
  if("cart" in localStorage){
   this.cartproducts=JSON.parse(localStorage.getItem("cart")!);
   let exist =this.cartproducts.find(item=>item.id==product.id)
   if(exist)
     alert("This product exist Already in your cart")
   else{ 
     this.cartproducts.push(product);
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