import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { CartComponent } from './Components/cart/cart.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ViewComponent } from './Components/all-products/view/view.component';
const routes: Routes = [
  {path : "home" ,component:HomeComponent},
  {path:'products' ,      component:AllProductsComponent },
  {path:'add-product' ,      component:AddProductComponent },
  {path:'product/edit/:productID' ,      component:EditProductComponent },
  {path:'signup' ,      component:SignupComponent},
  {path:'login' ,       component:LoginComponent},
  {path:'cart' ,        component:CartComponent}, 
  {path:'product/view', component:ViewComponent},
  {path:"**", redirectTo:"home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
