import { Component } from '@angular/core';
import { ActivityAuctionsTableComponent } from '../../dashboard/components/activity/activity-auctions-table/activity-auctions-table.component';
import { ActivityChartCardComponent } from '../../dashboard/components/activity/activity-chart-card/activity-chart-card.component';
import { NavbarComponent } from '../../layout/components/navbar/navbar.component';
import { SidebarComponent } from '../../layout/components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LayoutModule } from '../../layout/layout.module';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [ActivityAuctionsTableComponent, ActivityChartCardComponent, NavbarComponent, SidebarComponent, RouterOutlet, CommonModule, LayoutModule ],
  templateUrl: './notifications.component.html',
})
export class NotificationsComponent {

}
