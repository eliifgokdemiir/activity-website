import { Component, OnInit } from '@angular/core';
import { Nft } from '../../models/nft';
import { NftAuctionsTableComponent } from '../../components/nft/nft-auctions-table/nft-auctions-table.component';
import { NftChartCardComponent } from '../../components/nft/nft-chart-card/nft-chart-card.component';
import { NftSingleCardComponent } from '../../components/nft/nft-single-card/nft-single-card.component';
import { NftDualCardComponent } from '../../components/nft/nft-dual-card/nft-dual-card.component';
import { NftHeaderComponent } from '../../components/nft/nft-header/nft-header.component';

@Component({
    selector: 'app-nft',
    templateUrl: './nft.component.html',
    standalone: true,
    imports: [
        NftHeaderComponent,
        NftDualCardComponent,
        NftSingleCardComponent,
        NftChartCardComponent,
        NftAuctionsTableComponent,
    ],
})
export class NftComponent implements OnInit {
  nft: Array<Nft>;

  constructor() {
    this.nft = [
      {
        id: 34356771,
        title: 'TARKAN KONSERİ',
        creator: 'Tarkan',
        instant_price: 187.47,
        price: 187.47,
        ending_in: '09.09.2024',
        last_bid: 0.12,
        location: 'ODTÜ Vişnelik',
        image: './assets/images/img-01.jpg',
        avatar: './assets/avatars/avt-01.jpg',
      },
      {
        id: 34356772,
        title: 'Pupaks',
        price: 548.79,
        last_bid: 0.35,
        location: 'Jolly Joker',
        image: './assets/images/img-02.jpg',
      },
      {
        id: 34356773,
        title: 'Seeing Green collection',
        price: 234.88,
        last_bid: 0.15,
        location: '6:45',
        image: './assets/images/img-03.jpg',
      },
    ];
  }

  ngOnInit(): void {}
}
