import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/service/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Byte } from '@angular/compiler/src/util';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 public product:Product={
   id: 0,
   name: '',
   imageURL: '',
   description: '',
   price: 0,
   isFavorite: false,
   ispromotion: false,
   categoryId: 0
 };
 public productform!: FormGroup;
 
  constructor(public service:ProductService ,public route:Router ,private fb: FormBuilder) {}

  ngOnInit(): void {
    
   
  }

public  Addproduct(){ 
  
    this.service.Createproduct(this.product).subscribe(
     (data:Product)=> { 
      this.route.navigate(['/product']).then();
     }
    )
  }
 encodeImageFileAsURL(element:any) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      console.log('RESULT', reader.result)
    }
    reader.readAsDataURL(file);
  }

  // save() {
  //     // on Create New User
  //     if(this.productform.invalid) return;
  //     this.service.Createproduct(this.productform!.value).subscribe(
  //       (data:Product)=> {
  //       this.route.navigate(['/product']).then();}
  //     )
  //   //  else {
  //   //   // on Update User info
  //   //   this.productform.updateUser(this.productform.value);
  //   // }

  //   //Redirecting to user List page after save or update
    
  // }

}
