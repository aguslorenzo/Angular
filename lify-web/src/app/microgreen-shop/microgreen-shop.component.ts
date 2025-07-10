import { Component } from '@angular/core';
import { MicrogreenListComponent } from '../microgreen-list/microgreen-list.component';
import { MicrogreenCartComponent } from '../microgreen-cart/microgreen-cart.component';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-microgreen-shop',
  imports: [MicrogreenListComponent, MicrogreenCartComponent, NgIf],
  templateUrl: './microgreen-shop.component.html',
  styleUrl: './microgreen-shop.component.scss'
})
export class MicrogreenShopComponent {
  showSuccessModal = false;

  constructor(
    private router: Router
  ){
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { purchaseSuccess?: boolean };

    if (state?.purchaseSuccess) {
      this.showSuccessModal = true;

      setTimeout(() => {
        this.showSuccessModal = false;
      }, 10000);
    }
  }

  ngOnInit(){
    //this.route.queryParams.subscribe(params => {
     // if(params['success'] === 'true'){
      //  this.showSuccessMessage = true;
      //}
    //})
  }
}
