import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTestUpdateComponent } from './lab-test-update.component';

describe('LabTestUpdateComponent', () => {
  let component: LabTestUpdateComponent;
  let fixture: ComponentFixture<LabTestUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabTestUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabTestUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
