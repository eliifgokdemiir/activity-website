import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityAuctionsTableItemComponent } from './activity-auctions-table-item.component';

describe('NftAuctionsTableItemComponent', () => {
  let component: ActivityAuctionsTableItemComponent;
  let fixture: ComponentFixture<ActivityAuctionsTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ActivityAuctionsTableItemComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityAuctionsTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
