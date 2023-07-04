import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaharmacistStockmanagmentComponent } from './paharmacist-stockmanagment.component';

describe('PaharmacistStockmanagmentComponent', () => {
  let component: PaharmacistStockmanagmentComponent;
  let fixture: ComponentFixture<PaharmacistStockmanagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaharmacistStockmanagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaharmacistStockmanagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
