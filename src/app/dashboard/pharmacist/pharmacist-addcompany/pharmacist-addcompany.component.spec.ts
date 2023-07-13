import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistAddcompanyComponent } from './pharmacist-addcompany.component';

describe('PharmacistAddcompanyComponent', () => {
  let component: PharmacistAddcompanyComponent;
  let fixture: ComponentFixture<PharmacistAddcompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistAddcompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistAddcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
