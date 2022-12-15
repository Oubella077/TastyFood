import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path : "home" ,component:HomeComponent},
  {path:'product' ,      component:AllProductsComponent },
  {path:'add-product' ,      component:AddProductComponent },
  {path:'product/edit/:productID' ,      component:EditProductComponent },
 { path:"**", redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
