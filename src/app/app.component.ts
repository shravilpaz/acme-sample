import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div><h1>{{pageTitle}}</h1>
      <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'></a>
          <ul class='nav nav-pills'>
            <li><a routerLink='welcome' class='nav-link'>Home</a></li>
            <li><a routerLink='products' class='nav-link'>Product List</a></li>
          </ul>
      </nav>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  pageTitle : string = 'Acme product Management';
}
