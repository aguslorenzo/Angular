import { Component } from '@angular/core';
import { MicrogreenListComponent } from '../microgreen-list/microgreen-list.component';
import { MicrogreenCartComponent } from '../microgreen-cart/microgreen-cart.component';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-microgreen-shop',
  imports: [MicrogreenListComponent, MicrogreenCartComponent, NgIf],
  templateUrl: './microgreen-shop.component.html',
  styleUrl: './microgreen-shop.component.scss'
})
export class MicrogreenShopComponent {
  showSuccessMessage = false;

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      if(params['success'] === 'true'){
        this.showSuccessMessage = true;
      }
    })
  }
}
