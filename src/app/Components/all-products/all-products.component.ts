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
  public p:Product={ } as Product;
  searchTerm = '';
  errormessage: any;
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

  }
