import { Component } from '@angular/core';
import { MicrogreenCartComponent } from "../microgreen-cart/microgreen-cart.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout-form',
  imports: [MicrogreenCartComponent, ReactiveFormsModule],
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.scss'
})
export class CheckoutFormComponent {
  checkoutForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    repeatPassword: new FormControl('', []),
  });
}
