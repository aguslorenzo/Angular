import { Component, OnInit } from '@angular/core';
//oninit para el spinner-loader

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    const loader = document.getElementById('app-loader');
    if (loader) {
      loader.style.display = 'none';
    }
  }
  title = 'Lify Microgreens';
}
