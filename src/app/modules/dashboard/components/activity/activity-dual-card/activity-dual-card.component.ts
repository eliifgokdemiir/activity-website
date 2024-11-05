import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../../../models/activity';
import { NgStyle, CurrencyPipe } from '@angular/common';

@Component({
    selector: '[activity-dual-card]',
    templateUrl: './activity-dual-card.component.html',
    standalone: true,
    imports: [NgStyle, CurrencyPipe],
})
export class ActivityDualCardComponent implements OnInit {
  @Input() nft: Activity = <Activity>{};

  constructor() {}

  ngOnInit(): void {}
}
