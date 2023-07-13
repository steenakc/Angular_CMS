import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistUpdatePatientComponent } from './receptionist-update-patient.component';

describe('ReceptionistUpdatePatientComponent', () => {
  let component: ReceptionistUpdatePatientComponent;
  let fixture: ComponentFixture<ReceptionistUpdatePatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionistUpdatePatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistUpdatePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
