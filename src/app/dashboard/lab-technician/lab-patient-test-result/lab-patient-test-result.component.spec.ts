import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabPatientTestResultComponent } from './lab-patient-test-result.component';

describe('LabPatientTestResultComponent', () => {
  let component: LabPatientTestResultComponent;
  let fixture: ComponentFixture<LabPatientTestResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabPatientTestResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabPatientTestResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
