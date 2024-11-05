import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityDualCardComponent } from './activity-dual-card.component';

describe('BiddingDualCardComponent', () => {
  let component: ActivityDualCardComponent;
  let fixture: ComponentFixture<ActivityDualCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ActivityDualCardComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityDualCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
