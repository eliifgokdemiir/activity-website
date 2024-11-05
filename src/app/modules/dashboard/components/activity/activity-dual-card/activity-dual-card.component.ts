import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../../../models/activity';
import { NgStyle, CurrencyPipe } from '@angular/common';

@Component({
    selector: '[nft-dual-card]',
    templateUrl: './nft-dual-card.component.html',
    standalone: true,
    imports: [NgStyle, CurrencyPipe],
})
export class ActivityDualCardComponent implements OnInit {
  @Input() nft: Activity = <Activity>{};

  constructor() {}

  ngOnInit(): void {}
}
