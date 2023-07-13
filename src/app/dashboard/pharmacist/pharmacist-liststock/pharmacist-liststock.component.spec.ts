import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistListstockComponent } from './pharmacist-liststock.component';

describe('PharmacistListstockComponent', () => {
  let component: PharmacistListstockComponent;
  let fixture: ComponentFixture<PharmacistListstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistListstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistListstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
