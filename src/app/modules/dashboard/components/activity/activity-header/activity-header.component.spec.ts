import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityHeaderComponent } from './activity-header.component';

describe('NftHeaderComponent', () => {
  let component: ActivityHeaderComponent;
  let fixture: ComponentFixture<ActivityHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ActivityHeaderComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
