import { Component } from '@angular/core';
import { MicrogreenListComponent } from '../microgreen-list/microgreen-list.component';
import { MicrogreenCartComponent } from '../microgreen-cart/microgreen-cart.component';

@Component({
  selector: 'app-microgreen-shop',
  imports: [MicrogreenListComponent, MicrogreenCartComponent],
  templateUrl: './microgreen-shop.component.html',
  styleUrl: './microgreen-shop.component.scss'
})
export class MicrogreenShopComponent {

}
