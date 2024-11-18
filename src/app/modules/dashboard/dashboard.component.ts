import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../layout/components/sidebar/sidebar.component';
import { NavbarComponent } from '../layout/components/navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="flex h-screen w-full overflow-hidden bg-background">
      <app-sidebar></app-sidebar>
      <div class="flex grow flex-col content-start overflow-hidden bg-background">
        <app-navbar></app-navbar>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  imports: [RouterOutlet, CommonModule, SidebarComponent, NavbarComponent],
  standalone: true
})
export class DashboardComponent {}
