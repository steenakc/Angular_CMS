import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor.component';
import {DoctorRoutingModule} from  './doctor-routing.module';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';

@NgModule({
  declarations: [DoctorComponent, ViewAppointmentComponent, DiagnosisComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
