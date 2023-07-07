import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistNewPatientComponent } from './receptionist-new-patient.component';

describe('ReceptionistNewPatientComponent', () => {
  let component: ReceptionistNewPatientComponent;
  let fixture: ComponentFixture<ReceptionistNewPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionistNewPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistNewPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
