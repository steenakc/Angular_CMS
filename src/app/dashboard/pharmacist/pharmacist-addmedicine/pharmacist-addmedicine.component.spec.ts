import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistAddmedicineComponent } from './pharmacist-addmedicine.component';

describe('PharmacistAddmedicineComponent', () => {
  let component: PharmacistAddmedicineComponent;
  let fixture: ComponentFixture<PharmacistAddmedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistAddmedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistAddmedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
