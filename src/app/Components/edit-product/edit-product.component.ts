import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public productId!: number;
  public product: Product = {} as Product;
  constructor(public service: ProductService, public route: ActivatedRoute, public router: Router) {
    this.productId = this.route.snapshot.params['productID'];
  }

  ngOnInit(): void {
    if (this.productId)
      this.service.getproduct(this.productId).subscribe({
        next: (data) => { this.product = data },

        error: (err: any) => { console.error(err) }
      })
  }

  public Update() {
    this.service.editproduct(this.product, this.productId).subscribe(
      (data :Product) => {
        this.router.navigate(['/']).then();
      },
      (err) => {
        console.error(err)
        this.router.navigate(['/product/edit'])
      }
    )
  }


}


