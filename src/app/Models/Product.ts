export interface Product{ 
    id:number;
    name:string;
    imageURL:string;
    price:number;
    description:string,
    categoryId:number,
    isFavorite:boolean,
    ispromotion: boolean
 } 

 export interface Cartproduct{ 
    item:Product;
    quantity : number;
 }