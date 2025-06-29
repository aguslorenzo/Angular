import { Component } from '@angular/core';
import { MicrogreenCartService } from '../microgreen-cart.service';
import { Microgreen } from '../microgreen-list/Microgreen';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-microgreen-cart',
  imports: [CommonModule],
  templateUrl: './microgreen-cart.component.html',
  styleUrl: './microgreen-cart.component.scss'
})
export class MicrogreenCartComponent {

  cartList$: Observable<Microgreen[]>;


constructor(private cart: MicrogreenCartService) {
  this.cartList$ = cart.cartList.asObservable();
}

}
