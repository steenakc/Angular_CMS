import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabPatientTestComponent } from './lab-patient-test.component';

describe('LabPatientTestComponent', () => {
  let component: LabPatientTestComponent;
  let fixture: ComponentFixture<LabPatientTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabPatientTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabPatientTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
