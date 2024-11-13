import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDetailDialogComponent } from './ticket-detail-dialog.component';

describe('TicketDetailDialogComponent', () => {
  let component: TicketDetailDialogComponent;
  let fixture: ComponentFixture<TicketDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketDetailDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
