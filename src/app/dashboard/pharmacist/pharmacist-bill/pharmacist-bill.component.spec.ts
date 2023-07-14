import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistBillComponent } from './pharmacist-bill.component';

describe('PharmacistBillComponent', () => {
  let component: PharmacistBillComponent;
  let fixture: ComponentFixture<PharmacistBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
