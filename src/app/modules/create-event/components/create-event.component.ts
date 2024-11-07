import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../layout/components/sidebar/sidebar.component';
import { LayoutModule } from '../../layout/layout.module';
import { NavbarComponent } from '../../layout/components/navbar/navbar.component';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LayoutModule, SidebarComponent, NavbarComponent], // CommonModule import edildi
  templateUrl: './create-event.component.html',
})
export class CreateEventComponent {
  ngOnInit(): void {}
}
