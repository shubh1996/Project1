import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="container">
      <div class="row" style="justify-content: space-between; align-items: baseline;">
        <div class="title">Splitwise Lite</div>
        <div class="nav">
          <a routerLink="/" class="subtitle">Dashboard</a>
          <a routerLink="/groups" class="subtitle">Groups</a>
          <a routerLink="/add" class="subtitle">Add Expense</a>
        </div>
      </div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}

