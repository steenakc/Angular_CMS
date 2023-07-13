import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistReorderComponent } from './pharmacist-reorder.component';

describe('PharmacistReorderComponent', () => {
  let component: PharmacistReorderComponent;
  let fixture: ComponentFixture<PharmacistReorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistReorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistReorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
