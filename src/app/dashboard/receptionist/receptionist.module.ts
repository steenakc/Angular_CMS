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
import {MatCardModule} from '@angular/material/card';

//import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { ReceptionistListPatientComponent } from './receptionist-list-patient/receptionist-list-patient.component';






@NgModule({
  declarations: [RecptionistComponent, ReceptionistSearchComponent, ReceptionistNewPatientComponent, ReceptionistListPatientComponent],
  imports: [
    CommonModule,
    ReceptionistRoutingModule,

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
      MatCardModule
    
  ]
})
export class ReceptionistModule { }
