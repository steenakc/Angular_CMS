import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor.component';
import {DoctorRoutingModule} from  './doctor-routing.module';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
//import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { DoctorPrescriptionComponent } from './doctor-prescription/doctor-prescription.component';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatTabsModule} from '@angular/material/tabs';
import { DoctorlabreportComponent } from './doctorlabreport/doctorlabreport.component';

@NgModule({
  declarations: [DoctorComponent, ViewAppointmentComponent, DiagnosisComponent, DoctorPrescriptionComponent, DoctorlabreportComponent],
  imports: [
    MatTabsModule,
    CommonModule,
    DoctorRoutingModule,
    MatSelectModule,
    MatButtonModule,
     MatCheckboxModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    // FormsModule,
     MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatAutocompleteModule,
      FormsModule,
      ReactiveFormsModule,
      MatToolbarModule
  ]
})
export class DoctorModule { }
