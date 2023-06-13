import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from 'src/app/Models/CartItem';
import { Cartproduct, Product } from 'src/app/Models/Product';
import { Cartservice } from 'src/app/service/Cartservice/cartservice.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
 p:any;
 @Input() state!: any[];
 public cartproducts:any[]=[];
  constructor(private cartservice:Cartservice,private router :Router, private activatedroute :ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedroute.data.subscribe({
    //   next:(data)=>{this.p=data }
    //  })
  //  this.p=  this.router.getCurrentNavigation()?.extras.state;
  this.p=history.state.data;
} 
  
  addtocart(product:Product,index:number){
    // let item:CartItem={id:index+1,
    //   idproduct:product.id,idcustomer:2,quantity:1,
    // };
  // this.cartservice.Addproduct(item);
  }
  add2(product:Product){
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
}
