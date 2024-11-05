import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../../../models/activity';
import { NgStyle, CurrencyPipe } from '@angular/common';

@Component({
    selector: '[activity-single-card]',
    templateUrl: './activity-single-card.component.html',
    standalone: true,
    imports: [NgStyle, CurrencyPipe],
})
export class ActivitySingleCardComponent implements OnInit {
  @Input() nft: Activity = <Activity>{};

  constructor() {}

  ngOnInit(): void {}
}
