import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MicrogreenListComponent } from './microgreen-list/microgreen-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MicrogreenCartComponent } from "./microgreen-cart/microgreen-cart.component";
import { MicrogreenAboutComponent } from "./microgreen-about/microgreen-about.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MicrogreenListComponent, NavbarComponent, MicrogreenCartComponent, MicrogreenAboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lify-web';
}
