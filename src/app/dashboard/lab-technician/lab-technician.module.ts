import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabTechnicianComponent } from './lab-technician.component';
import { LabHomeComponent } from './lab-home/lab-home.component';
import { LabTestListComponent } from './lab-test-list/lab-test-list.component';
import { LabTestAddComponent } from './lab-test-add/lab-test-add.component';
import { LabPatientListComponent } from './lab-patient-list/lab-patient-list.component';
import { LabPatientTestComponent } from './lab-patient-test/lab-patient-test.component';
import { LabPatientTestResultComponent } from './lab-patient-test-result/lab-patient-test-result.component';
import{LabTechnicianRoutingModule} from'./lab-technician-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [LabTechnicianComponent, LabHomeComponent, LabTestListComponent, LabTestAddComponent, LabPatientListComponent, LabPatientTestComponent, LabPatientTestResultComponent],
  imports: [
    CommonModule,
    LabTechnicianRoutingModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatIconModule
  ]
})
export class LabTechnicianModule { }
