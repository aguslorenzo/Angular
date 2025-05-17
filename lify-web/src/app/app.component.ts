import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MicrogreenListComponent } from './microgreen-list/microgreen-list.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MicrogreenListComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lify-web';
}
