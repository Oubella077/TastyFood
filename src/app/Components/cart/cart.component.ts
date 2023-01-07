import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartproducts: Product[] = [];
  quantity :number =0;
  check :boolean=false;
  constructor() { }

  ngOnInit(): void {
    this.getproductscart();
  }

  getproductscart() {
    if ("cart" in localStorage) {
      this.cartproducts = JSON.parse(localStorage.getItem("cart")!);}
    
  }
  delete(index: number) {
    this.cartproducts.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(this.cartproducts));
  }
  calcule(index: number,$event:any){
    let s=this.cartproducts[index].prix*($event.target.value)
    console.log($event.target.value)
    console.log(s)
    this.cartproducts[index].prix=s;
  }

}
