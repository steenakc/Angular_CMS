import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistAddstockComponent } from './pharmacist-addstock.component';

describe('PharmacistAddstockComponent', () => {
  let component: PharmacistAddstockComponent;
  let fixture: ComponentFixture<PharmacistAddstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistAddstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistAddstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
