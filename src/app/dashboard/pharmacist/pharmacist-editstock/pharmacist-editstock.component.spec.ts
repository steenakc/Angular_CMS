import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistEditstockComponent } from './pharmacist-editstock.component';

describe('PharmacistEditstockComponent', () => {
  let component: PharmacistEditstockComponent;
  let fixture: ComponentFixture<PharmacistEditstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistEditstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistEditstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
