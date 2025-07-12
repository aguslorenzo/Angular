import { Injectable } from '@angular/core';
import { Microgreen } from './microgreen-list/Microgreen';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MicrogreenCartService {

  private _cartList: Microgreen[] = [];
  cartList: BehaviorSubject<Microgreen[]> = new BehaviorSubject<Microgreen[]>([]);

  constructor() { }

  shopList: Microgreen[]= [];

  addToCart(microgreen: Microgreen){
    let item: Microgreen | undefined= this._cartList.find(v1 => v1.name == microgreen.name);
    if(!item){
      this._cartList.push({... microgreen});
    }else {
      item.quantity += microgreen.quantity;
    }
  
    this.cartList.next(this._cartList);
  };
  removeFromCart(microgreen: Microgreen): void {
    const current = this.cartList.getValue();
    const updated = current.filter(item => item.name !== microgreen.name);
    this.cartList.next(updated);
  }
  clearCart() {
    this._cartList = [];
    this.cartList.next([]);
 }
  
}
