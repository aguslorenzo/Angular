import { Component, Input } from '@angular/core';
import { Microgreen } from '../microgreen-list/Microgreen';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-integer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {
  @Input()
  microgreen!: Microgreen;
  
upQuantity(microgreen : Microgreen): void {
  if(microgreen.quantity < microgreen.stock)
    microgreen.quantity++;
}

downQuantity(microgreen : Microgreen): void {
  if(microgreen.quantity > 0)
    microgreen.quantity--;
}
onChangeQuantity(event: Event, microgreen: Microgreen): void{
  console.log(event.target);
}
}
