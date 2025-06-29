import { Injectable } from '@angular/core';
import { Microgreen } from './microgreen-list/Microgreen';

@Injectable({
  providedIn: 'root'
})
export class MicrogreenCartService {

  cartList: Microgreen[] = [];

  constructor() { }

  shopList: Microgreen[]= [];

  addToCart(microgreen: Microgreen){
    let item: Microgreen | undefined= this.cartList.find(v1 => v1.name == microgreen.name);
    if(!item){
      this.cartList.push({... microgreen}); //clona el objeto
    }else {
      item.quantity += microgreen.quantity;
    }
    console.log(this.cartList);
  };

  
}
