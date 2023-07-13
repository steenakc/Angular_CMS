import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespAppointmentViewComponent } from './resp-appointment-view.component';

describe('RespAppointmentViewComponent', () => {
  let component: RespAppointmentViewComponent;
  let fixture: ComponentFixture<RespAppointmentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespAppointmentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespAppointmentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
