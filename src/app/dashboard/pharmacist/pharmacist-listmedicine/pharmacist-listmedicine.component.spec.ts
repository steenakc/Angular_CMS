import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistListmedicineComponent } from './pharmacist-listmedicine.component';

describe('PharmacistListmedicineComponent', () => {
  let component: PharmacistListmedicineComponent;
  let fixture: ComponentFixture<PharmacistListmedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistListmedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistListmedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
