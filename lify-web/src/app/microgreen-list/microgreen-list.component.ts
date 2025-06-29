import { Component } from '@angular/core';
import { Microgreen } from './Microgreen';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputIntegerComponent } from "../input-integer/input-integer.component";
import { MicrogreenCartService } from '../microgreen-cart.service';

@Component({
  selector: 'app-microgreen-list',
  standalone: true,
  imports: [CommonModule, FormsModule, InputIntegerComponent],
  templateUrl: './microgreen-list.component.html',
  styleUrls: ['./microgreen-list.component.scss']
})

export class MicrogreenListComponent {
microgreens: Microgreen[] = [
    {
      name: 'Radish',
      image: 'assets/images/radish.jpg',
      price: 100,
      stock: 8,
      clearance: true,
      quantity: 0,
    },
    {
      name: 'Brocoli',
      image: 'assets/images/radish.jpg',
      price: 100,
      stock: 4,
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Arugula',
      image: 'assets/images/radish.jpg',
      price: 130,
      stock: 0,
      clearance: false,
      quantity: 0,
    },
  ]
  
  constructor(private cart: MicrogreenCartService) {
  }
  
addToCart(microgreen: Microgreen): void {
  this.cart.addToCart(microgreen);
  microgreen.stock -= microgreen.quantity;
  microgreen.quantity = 0;
}

maxReached(m: string) {
  alert(m);
}
}