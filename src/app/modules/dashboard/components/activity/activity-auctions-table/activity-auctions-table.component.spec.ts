import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityAuctionsTableComponent } from './activity-auctions-table.component';

describe('NftAuctionsTableComponent', () => {
  let component: ActivityAuctionsTableComponent;
  let fixture: ComponentFixture<ActivityAuctionsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ActivityAuctionsTableComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityAuctionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
