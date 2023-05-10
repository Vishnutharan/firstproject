import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'This Is My Basic Crud Application working in appcomponent HTML';
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['home']);
  }

  goProducts() {
    this.router.navigate(['products']);
  }
}
