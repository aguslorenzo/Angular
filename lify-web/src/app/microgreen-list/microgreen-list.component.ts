import { Component } from '@angular/core';
import { Microgreen } from './Microgreen';

@Component({
  selector: 'app-microgreen-list',
  imports: [],
  templateUrl: './microgreen-list.component.html',
  styleUrl: './microgreen-list.component.scss'
})
export class MicrogreenListComponent {
microgreen: Microgreen[] = [
    {
      name: 'Radish',
      image: 'assets/images/radish.jpg',
      price: 100,
      stock: 8,
      clearance: true,
    },
    {
      name: 'Brocoli',
      image: 'assets/images/radish.jpg',
      price: 100,
      stock: 4,
      clearance: false,
    },
    {
      name: 'Arugula',
      image: 'assets/images/radish.jpg',
      price: 130,
      stock: 0,
      clearance: false,
    },
  ]
}
