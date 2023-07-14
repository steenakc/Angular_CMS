import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecptionistComponent } from './receptionist.component';
import {ReceptionistRoutingModule} from  './receptionist-routing.module';
import { ReceptionistSearchComponent } from './receptionist-search/receptionist-search.component';
import { ReceptionistNewPatientComponent } from './receptionist-new-patient/receptionist-new-patient.component'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';

//import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { ReceptionistListPatientComponent } from './receptionist-list-patient/receptionist-list-patient.component';
import { ReceptionistDashboardComponent } from './receptionist-dashboard/receptionist-dashboard.component';
import {MatMenuModule} from '@angular/material/menu';
import { ReceptionistBookAppointmentComponent } from './receptionist-book-appointment/receptionist-book-appointment.component';
import { ReceptionistUpdatePatientComponent } from './receptionist-update-patient/receptionist-update-patient.component';
import { RespAppointmentViewComponent } from './resp-appointment-view/resp-appointment-view.component';
import { RecepBillComponent } from './recep-bill/recep-bill.component';
import {MatPaginatorModule} from '@angular/material/paginator';






@NgModule({
  declarations: [RecptionistComponent, ReceptionistSearchComponent, ReceptionistNewPatientComponent, ReceptionistListPatientComponent, ReceptionistDashboardComponent, ReceptionistBookAppointmentComponent, ReceptionistUpdatePatientComponent, RespAppointmentViewComponent, RecepBillComponent],
  imports: [
    CommonModule,
    ReceptionistRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatSelectModule,
    MatButtonModule,
     MatCheckboxModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    FormsModule,
     MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatPaginatorModule
    
  ]
})
export class ReceptionistModule { }
