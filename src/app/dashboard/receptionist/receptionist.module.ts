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


@NgModule({
  declarations: [RecptionistComponent, ReceptionistSearchComponent, ReceptionistNewPatientComponent],
  imports: [
    CommonModule,
    ReceptionistRoutingModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatIconModule
    
  ]
})
export class ReceptionistModule { }
