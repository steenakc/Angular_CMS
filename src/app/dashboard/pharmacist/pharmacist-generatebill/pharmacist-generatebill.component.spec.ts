import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistGeneratebillComponent } from './pharmacist-generatebill.component';

describe('PharmacistGeneratebillComponent', () => {
  let component: PharmacistGeneratebillComponent;
  let fixture: ComponentFixture<PharmacistGeneratebillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistGeneratebillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistGeneratebillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
