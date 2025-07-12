import { Component, Input } from '@angular/core';
import { MicrogreenCartService } from '../microgreen-cart.service';
import { Microgreen } from '../microgreen-list/Microgreen';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-microgreen-cart',
  imports: [CommonModule, RouterModule],
  templateUrl: './microgreen-cart.component.html',
  styleUrl: './microgreen-cart.component.scss'
})
export class MicrogreenCartComponent {

  cartList$: Observable<Microgreen[]>;

  constructor(private cart: MicrogreenCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  @Input() hideCheckoutButton: boolean = false;
  @Input() hideRemoveFromCartButton: boolean = false;

  shippingCost = 1800;

  getSubtotal(subtotalItems: Microgreen[]): number {
    return subtotalItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  removeItem(microgreen: Microgreen): void {
    this.cart.removeFromCart(microgreen);
  }
}
