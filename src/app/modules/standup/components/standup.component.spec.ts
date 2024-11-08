import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandupComponent } from './standup.component';

describe('StandupComponent', () => {
  let component: StandupComponent;
  let fixture: ComponentFixture<StandupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
