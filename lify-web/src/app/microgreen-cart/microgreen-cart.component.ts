import { Component } from '@angular/core';
import { MicrogreenCartService } from '../microgreen-cart.service';

@Component({
  selector: 'app-microgreen-cart',
  imports: [],
  templateUrl: './microgreen-cart.component.html',
  styleUrl: './microgreen-cart.component.scss'
})
export class MicrogreenCartComponent {

constructor(private cart: MicrogreenCartService) {
  }
}
