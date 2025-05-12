import { Component } from '@angular/core';

@Component({
  selector: 'app-microgreen-list',
  standalone: false,
  templateUrl: './microgreen-list.component.html',
  styleUrl: './microgreen-list.component.scss'
})
export class MicrogreenListComponent {
  microgreen = {
    name: "Radish",
    image: "assets/images/radish.jpg",
    price: 50,
    stock: 5
  }
}
