import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityChartCardComponent } from './activity-chart-card.component';

describe('NftChartCardComponent', () => {
  let component: ActivityChartCardComponent;
  let fixture: ComponentFixture<ActivityChartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ActivityChartCardComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
