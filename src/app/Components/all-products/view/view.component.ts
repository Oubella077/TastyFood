import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
@Input() data:Product= {
  id: 0,
  name: '',
  photo: '',
  description: '',
  prix: 0,
  isFavorite: false,
  ispromotion: false
};

 public cartproducts:Product[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  add2(product:Product){
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
}
