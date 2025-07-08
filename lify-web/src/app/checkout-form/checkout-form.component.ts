import { Component } from '@angular/core';
import { MicrogreenCartComponent } from "../microgreen-cart/microgreen-cart.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersDataService } from '../users-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-form',
  imports: [MicrogreenCartComponent, ReactiveFormsModule],
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.scss'
})
export class CheckoutFormComponent {
  constructor(
    private usersDataService: UsersDataService,
    private router : Router
  ) {}

  checkoutForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[A-Za-z\s]+$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10,15}$/)]),
    address: new FormGroup ({
      street: new FormControl('', [Validators.required, Validators.minLength(4)]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required]),
    })
  });

  onSubmit(){
    /*
    chequeo que el email q me dieron exista en el endpoint de email
    const email = this.checkoutForm.get('email')?.value ?? '';

    this.usersDataService.emailExists(email).subscribe(exists => {
      if(exists){
        this.router.navigate(['/microgreens'], { queryParams: { success: 'true' } });//terminar esto
      } else {
        console.log("el email no existe en los daots)")
      }
    })
    */
  }
}
