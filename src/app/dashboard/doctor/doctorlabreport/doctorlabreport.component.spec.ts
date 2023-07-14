import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorlabreportComponent } from './doctorlabreport.component';

describe('DoctorlabreportComponent', () => {
  let component: DoctorlabreportComponent;
  let fixture: ComponentFixture<DoctorlabreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorlabreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorlabreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
