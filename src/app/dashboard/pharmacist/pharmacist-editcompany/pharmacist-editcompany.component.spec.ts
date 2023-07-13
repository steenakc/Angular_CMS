import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistEditcompanyComponent } from './pharmacist-editcompany.component';

describe('PharmacistEditcompanyComponent', () => {
  let component: PharmacistEditcompanyComponent;
  let fixture: ComponentFixture<PharmacistEditcompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistEditcompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistEditcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
