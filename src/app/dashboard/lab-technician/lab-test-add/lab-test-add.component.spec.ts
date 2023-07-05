import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTestAddComponent } from './lab-test-add.component';

describe('LabTestAddComponent', () => {
  let component: LabTestAddComponent;
  let fixture: ComponentFixture<LabTestAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabTestAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabTestAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
