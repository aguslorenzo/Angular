import { Component } from '@angular/core';
import { Microgreen } from './Microgreen';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputIntegerComponent } from "../input-integer/input-integer.component";
import { MicrogreenCartService } from '../microgreen-cart.service';
import { MicrogreenDataService } from '../microgreen-data.service';

@Component({
  selector: 'app-microgreen-list',
  standalone: true,
  imports: [CommonModule, FormsModule, InputIntegerComponent],
  templateUrl: './microgreen-list.component.html',
  styleUrls: ['./microgreen-list.component.scss']
})

export class MicrogreenListComponent {
  microgreens: Microgreen[] = [];
  
  constructor(
    private cart: MicrogreenCartService,
    private microgreenDataService : MicrogreenDataService) {
  }

  ngOnInit(): void {
    this.microgreenDataService.getAll()
    .subscribe(microgreens => this.microgreens = microgreens);
  }


  addToCart(microgreen: Microgreen): void {
    this.cart.addToCart(microgreen);
    microgreen.stock -= microgreen.quantity;
    microgreen.quantity = 0;    
  }

  maxReached(m: string) {
    alert(m);//todo cambiar esto
  }
  }