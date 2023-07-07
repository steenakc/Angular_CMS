import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistListPatientComponent } from './receptionist-list-patient.component';

describe('ReceptionistListPatientComponent', () => {
  let component: ReceptionistListPatientComponent;
  let fixture: ComponentFixture<ReceptionistListPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionistListPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistListPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
