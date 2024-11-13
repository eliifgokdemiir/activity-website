import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../layout/components/sidebar/sidebar.component';
import { NavbarComponent } from '../../layout/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { LayoutModule } from '../../layout/layout.module';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent, NavbarComponent, RouterOutlet, AngularSvgIconModule, LayoutModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  emailNotification = 'active';
  smsNotification = 'inactive';
  appNotification = 'active';

  onPreferenceChange(type: string, value: string): void {
    if (type === 'email') this.emailNotification = value;
    if (type === 'sms') this.smsNotification = value;
    if (type === 'app') this.appNotification = value;
  }
}
