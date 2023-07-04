import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecptionistComponent } from './receptionist.component';
import {ReceptionistRoutingModule} from  './receptionist-routing.module';
import { ReceptionistSearchComponent } from './receptionist-search/receptionist-search.component';
import { ReceptionistNewPatientComponent } from './receptionist-new-patient/receptionist-new-patient.component'

@NgModule({
  declarations: [RecptionistComponent, ReceptionistSearchComponent, ReceptionistNewPatientComponent],
  imports: [
    CommonModule,
    ReceptionistRoutingModule
  ]
})
export class ReceptionistModule { }
