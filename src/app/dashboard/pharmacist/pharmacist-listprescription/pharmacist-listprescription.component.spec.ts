import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistListprescriptionComponent } from './pharmacist-listprescription.component';

describe('PharmacistListprescriptionComponent', () => {
  let component: PharmacistListprescriptionComponent;
  let fixture: ComponentFixture<PharmacistListprescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistListprescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistListprescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
