import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabTechnicianComponent } from './lab-technician.component';
import { LabHomeComponent } from './lab-home/lab-home.component';
import { LabTestListComponent } from './lab-test-list/lab-test-list.component';
import { LabTestAddComponent } from './lab-test-add/lab-test-add.component';
import { LabPatientListComponent } from './lab-patient-list/lab-patient-list.component';
import { LabPatientTestComponent } from './lab-patient-test/lab-patient-test.component';
import { LabPatientTestResultComponent } from './lab-patient-test-result/lab-patient-test-result.component';
import {LabTechnicianRoutingModule} from'./lab-technician-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { LabTestUpdateComponent } from './lab-test-update/lab-test-update.component';
import { AddresultComponent } from './addresult/addresult.component';
import { EditresultComponent } from './editresult/editresult.component';
import { LabBillComponent } from './lab-bill/lab-bill.component';







@NgModule({
  declarations: [LabTechnicianComponent, LabHomeComponent, LabTestListComponent, LabTestAddComponent, LabPatientListComponent, LabPatientTestComponent, LabPatientTestResultComponent, LabTestUpdateComponent, AddresultComponent, EditresultComponent, LabBillComponent],
  imports: [
    CommonModule,
    LabTechnicianRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatMenuModule
    
  ]
})
export class LabTechnicianModule { }
