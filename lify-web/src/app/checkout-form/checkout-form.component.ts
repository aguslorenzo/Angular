import { Component } from '@angular/core';
import { MicrogreenCartComponent } from "../microgreen-cart/microgreen-cart.component";
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-form',
  imports: [MicrogreenCartComponent, ReactiveFormsModule, NgIf],
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.scss'
})
export class CheckoutFormComponent {

  constructor(
    private router: Router
  ){};
  
  currentForm = 1;

  goToPayment() {
    if (this.checkoutForm.valid) {
      this.currentForm = 2;
    }
  }

  checkoutForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[A-Za-z\s]+$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl(''),
    address: new FormGroup ({
      street: new FormControl('', [Validators.required, Validators.minLength(4)]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
    })
  });

  paymentForm = new FormGroup({
    cardNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{16}$/)]),
    cardName: new FormControl('', [Validators.required]),
    expiration: new FormControl('', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/), this.cardExpiredValidator]),
    cvv: new FormControl('', [Validators.required, Validators.pattern(/^\d{3,4}$/)]),
  });

    cardExpiredValidator(control: AbstractControl): ValidationErrors | null {
    
    let value: string = control.value;

    let [monthStr, yearStr] = value.split('/');
    let month = parseInt(monthStr, 10);
    let year = parseInt(yearStr, 10) + 2000;

    let expirationDate = new Date(year, month, 0);

    let today = new Date();
    today.setHours(0, 0, 0, 0);

    return expirationDate < today ? {expired: true} : null;
  }

  onSubmit(){
    if (this.checkoutForm.valid) {
      this.currentForm = 2; 
    }
  }
  onPayment(){
    if (this.paymentForm.valid) {
      this.router.navigate(['/microgreens'], {
        state: { purchaseSuccess: true }
      });
    } 
  }


}
