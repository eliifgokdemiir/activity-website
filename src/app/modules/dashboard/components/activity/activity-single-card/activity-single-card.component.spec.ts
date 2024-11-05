import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySingleCardComponent } from './activity-single-card.component';

describe('NftSingleCardComponent', () => {
  let component: ActivitySingleCardComponent;
  let fixture: ComponentFixture<ActivitySingleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ActivitySingleCardComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitySingleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
