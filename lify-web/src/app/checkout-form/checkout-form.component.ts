import { Component } from '@angular/core';
import { MicrogreenCartComponent } from "../microgreen-cart/microgreen-cart.component";

@Component({
  selector: 'app-checkout-form',
  imports: [MicrogreenCartComponent],
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.scss'
})
export class CheckoutFormComponent {

}
