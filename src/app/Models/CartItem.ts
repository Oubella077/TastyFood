import { Product } from "./Product";

export interface CartItem{ 
     id:number;
    idproduct:number;
    emailcus?:String;
    quantity:number;
  
    
}

export interface CartListe{ 
    items:Product[];
    tolalcost : number;
 }