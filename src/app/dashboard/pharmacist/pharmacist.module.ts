import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PharmacistRoutingModule} from  './pharmacist-routing.module';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PharmacistComponent } from './pharmacist.component';
import { PharmacistAddstockComponent } from './pharmacist-addstock/pharmacist-addstock.component';
import {PaharmacistStockmanagmentComponent} from './paharmacist-stockmanagment/paharmacist-stockmanagment.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    PharmacistComponent, PharmacistAddstockComponent,
    PaharmacistStockmanagmentComponent
  ],
  imports: [
    CommonModule,
    PharmacistRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
   
    HttpClientModule,
    MatButtonModule,
     MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatGridListModule,
  
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
export class PharmacistModule { }
