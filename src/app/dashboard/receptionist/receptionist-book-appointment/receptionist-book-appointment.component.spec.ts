import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistBookAppointmentComponent } from './receptionist-book-appointment.component';

describe('ReceptionistBookAppointmentComponent', () => {
  let component: ReceptionistBookAppointmentComponent;
  let fixture: ComponentFixture<ReceptionistBookAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionistBookAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistBookAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
