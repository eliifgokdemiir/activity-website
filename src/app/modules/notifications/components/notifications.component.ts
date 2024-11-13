import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivityAuctionsTableComponent } from '../../dashboard/components/activity/activity-auctions-table/activity-auctions-table.component';
import { ActivityChartCardComponent } from '../../dashboard/components/activity/activity-chart-card/activity-chart-card.component';
import { NavbarComponent } from '../../layout/components/navbar/navbar.component';
import { SidebarComponent } from '../../layout/components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LayoutModule } from '../../layout/layout.module';
import { Activity } from '../../dashboard/models/activity';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [ActivityAuctionsTableComponent, ActivityChartCardComponent, NavbarComponent, SidebarComponent, RouterOutlet, CommonModule, LayoutModule ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './notifications.component.html',
})
export class NotificationsComponent {
  public activeTickets: Activity[] = [];
  public pastTickets: Activity[] = [];

  constructor() {
    // Örnek aktif bilet verileri
    this.activeTickets = [
      {
        id: 1,
        title: 'Crypto Cities',
        type: 'festival',
        creator: 'Jenny Wilson',
        image: 'https://lh3.googleusercontent.com/t_S1sM__cKCFbuhbwQ5JHKNRRggKuPH2O3FM_-1yOxJLRzz9VRMAPaVBibgrumZG3qsB1YxEuwvB7r9rl-F-gI6Km9NlfWhecfPS=h500',
        avatar: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-13.jpg',
        date: '2024-12-25',
        time: '21:00',
        price: 35330.9,
        instant_price: 22.0,
      },
      // Diğer aktif biletler...
    ];

    // Örnek geçmiş bilet verileri
    this.pastTickets = [
      {
        id: 2,
        title: 'Lady Ape Club',
        type: 'festival',
        creator: 'Jenny Wilson',
        image: 'https://lh3.googleusercontent.com/k95IQpeYutx-lYXwgTZw0kXZl9GAkIOc4Yz3Dr06rndWphZ25kSWyF64aTqT3W4cOxz0eB5LfAss5i9WAR-ZPWVaifijsABLqzEYwHY=h500',
        avatar: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-13.jpg',
        date: '2024-09-15',
        time: '21:00',
        price: 4812.72,
        instant_price: 2.9,
      },
      // Diğer geçmiş biletler...
    ];
  }

  ngOnInit(): void {}
}
