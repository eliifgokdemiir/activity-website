import { Component, OnInit } from '@angular/core';
import { Activity } from '../../models/activity';
import { ActivityAuctionsTableComponent } from '../../components/activity/activity-auctions-table/activity-auctions-table.component';
import { ActivityChartCardComponent } from '../../components/activity/activity-chart-card/activity-chart-card.component';
import { ActivitySingleCardComponent } from '../../components/activity/activity-single-card/activity-single-card.component';
import { ActivityDualCardComponent } from '../../components/activity/activity-dual-card/activity-dual-card.component';
import { ActivityHeaderComponent } from '../../components/activity/activity-header/activity-header.component';

@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    standalone: true,
    imports: [
      ActivityHeaderComponent,
      ActivityDualCardComponent,
      ActivitySingleCardComponent,
      ActivityChartCardComponent,
      ActivityAuctionsTableComponent,
    ],
})
export class ActivityComponent implements OnInit {
  nft: Array<Activity>;

  constructor() {
    this.nft = [
      {
        id: 34356771,
        title: 'TARKAN KONSERİ',
        creator: 'Tarkan',
        instant_price: 187.47,
        price: 187.47,
        date: '09.09.2024',
        last_bid: 0.12,
        location: 'ODTÜ Vişnelik',
        image: './assets/images/img-01.jpg',
        avatar: './assets/avatars/avt-01.jpg',
      },
      {
        id: 34356772,
        title: 'Happy Halloween',
        price: 548.79,
        date: '09.09.2024',
        last_bid: 0.35,
        location: 'Jolly Joker',
        image: './assets/images/img-02.jpg',
      },
      {
        id: 34356773,
        title: 'Perdenin Ardındakiler',
        price: 234.88,
        date: '09.09.2024',
        last_bid: 0.15,
        location: '6:45',
        image: './assets/images/img-03.jpg',
      },
    ];
  }

  ngOnInit(): void {}
}
