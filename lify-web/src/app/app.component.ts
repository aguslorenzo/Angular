import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MicrogreenListComponent } from './microgreen-list/microgreen-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MicrogreenListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lify-web';
}
