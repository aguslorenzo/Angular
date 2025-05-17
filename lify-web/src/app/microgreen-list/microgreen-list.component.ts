import { Component } from '@angular/core';
import { Microgreen } from './Microgreen';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-microgreen-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './microgreen-list.component.html',
  styleUrls: ['./microgreen-list.component.scss']
})
export class MicrogreenListComponent {
microgreens: Microgreen[] = [
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
