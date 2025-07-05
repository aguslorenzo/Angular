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
    fullName: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required]),
    address: new FormGroup ({
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required]),
    })
  });
}
