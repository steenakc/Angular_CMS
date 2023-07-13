import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistEditmedicineComponent } from './pharmacist-editmedicine.component';

describe('PharmacistEditmedicineComponent', () => {
  let component: PharmacistEditmedicineComponent;
  let fixture: ComponentFixture<PharmacistEditmedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistEditmedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistEditmedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
