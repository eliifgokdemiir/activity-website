import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../../../models/activity';
import { CurrencyPipe } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: '[nft-auctions-table-item]',
    templateUrl: './nft-auctions-table-item.component.html',
    standalone: true,
    imports: [AngularSvgIconModule, CurrencyPipe],
})
export class ActivityAuctionsTableItemComponent implements OnInit {
  @Input() auction = <Activity>{};

  constructor() {}

  ngOnInit(): void {}
}
