import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepBillComponent } from './recep-bill.component';

describe('RecepBillComponent', () => {
  let component: RecepBillComponent;
  let fixture: ComponentFixture<RecepBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
