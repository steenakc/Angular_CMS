import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistListmedicineprescriptionComponent } from './pharmacist-listmedicineprescription.component';

describe('PharmacistListmedicineprescriptionComponent', () => {
  let component: PharmacistListmedicineprescriptionComponent;
  let fixture: ComponentFixture<PharmacistListmedicineprescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistListmedicineprescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistListmedicineprescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
