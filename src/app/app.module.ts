import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header/header.component';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { ViewComponent } from './Components/all-products/view/view.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { CartComponent } from './Components/cart/cart.component';
import { HomeComponent } from './Components/home/home.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, AllProductsComponent, AddProductComponent, EditProductComponent, ViewComponent, LoginComponent,
    SignupComponent,
    CartComponent,
    HomeComponent,
  ],
  imports: [ BrowserModule,AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,NgxPaginationModule  ],
  providers: [],
  exports :[NgxPaginationModule] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
