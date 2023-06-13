import { Component, OnInit } from '@angular/core';
import { Cartservice } from 'src/app/service/Cartservice/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartproducts: any[] = [];
  quantity :any[] = []
  check :boolean=false;
  today: number = Date.now();
  total: number=0;
  Total: number=0;
  constructor(private service:Cartservice) { }

  ngOnInit(): void {
    this.getproductscart();
    this.getTotal();
  }

  getproductscart() {
    this.service.getcartproducts().subscribe( {
      next:(data:any)=>{ 
        this.cartproducts=data.cartItemDTO;
        this.Total=data.totalcoste        ;
        console.log(data)  },
      error :(err: { message: any; })=>{console.log(err.message)}
    })
  }
  
  Delete(index: number){
    let conf=confirm("Are you sure");
    if (conf==false) 
    return;     
      this.service.deletecartItem(index).subscribe( {       
        next :  (data)=>{ this.getproductscart();},
        error:  (err: any)=> {console.error(err)}     
        }
       )
     }
  calcule(index: number,$event:any){
    let s=this.cartproducts[index].prix*($event.target.value)
    console.log($event.target.value)
    console.log(s)
    this.cartproducts[index].prix=s;
  } 
  minsquantity(index: number) {
    this.cartproducts[index].quantity--;
    if (this.cartproducts[index].quantity < 0) this.cartproducts[index].quantity=0;
    localStorage.setItem("cart", JSON.stringify(this.cartproducts));
    this.getTotal();
  }
  addquantity(index: number) {
    this.cartproducts[index].quantity++
    localStorage.setItem("cart", JSON.stringify(this.cartproducts));
    this.getTotal();
  }
  getTotal() {
    this.total = 0;
    for (let x in this.cartproducts) {
      this.total += this.cartproducts[x].quantity * this.cartproducts[x].item.prix
    }
  }
  detecteChange(){
    this.getTotal();
    localStorage.setItem("cart", JSON.stringify(this.cartproducts));
  }
}
