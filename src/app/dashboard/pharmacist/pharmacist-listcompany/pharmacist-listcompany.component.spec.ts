import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistListcompanyComponent } from './pharmacist-listcompany.component';

describe('PharmacistListcompanyComponent', () => {
  let component: PharmacistListcompanyComponent;
  let fixture: ComponentFixture<PharmacistListcompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistListcompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistListcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
