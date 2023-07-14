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
import { PharmacistListstockComponent } from './pharmacist-liststock/pharmacist-liststock.component';
import { PharmacistAddmedicineComponent } from './pharmacist-addmedicine/pharmacist-addmedicine.component';
import { PharmacistListmedicineComponent } from './pharmacist-listmedicine/pharmacist-listmedicine.component';

import {MatMenuModule} from '@angular/material/menu';
import { PharmacistAddcompanyComponent } from './pharmacist-addcompany/pharmacist-addcompany.component';
import { PharmacistListcompanyComponent } from './pharmacist-listcompany/pharmacist-listcompany.component';
import { PharmacistListprescriptionComponent } from './pharmacist-listprescription/pharmacist-listprescription.component';
import { PharmacistListmedicineprescriptionComponent } from './pharmacist-listmedicineprescription/pharmacist-listmedicineprescription.component';
import { PharmacistBillComponent } from './pharmacist-bill/pharmacist-bill.component';
import { PharmacistGeneratebillComponent } from './pharmacist-generatebill/pharmacist-generatebill.component';
import { PharmacistReorderComponent } from './pharmacist-reorder/pharmacist-reorder.component';
import { PharmacistEditstockComponent } from './pharmacist-editstock/pharmacist-editstock.component';
import { PharmacistEditmedicineComponent } from './pharmacist-editmedicine/pharmacist-editmedicine.component';
import { PharmacistEditcompanyComponent } from './pharmacist-editcompany/pharmacist-editcompany.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    PharmacistComponent, PharmacistAddstockComponent,
    PaharmacistStockmanagmentComponent,
    PharmacistListstockComponent,
    
    PharmacistAddmedicineComponent,
    PharmacistListmedicineComponent,
    PharmacistAddcompanyComponent,
    PharmacistListcompanyComponent,
    PharmacistListprescriptionComponent,
    PharmacistListmedicineprescriptionComponent,
    PharmacistBillComponent,
    PharmacistGeneratebillComponent,
    PharmacistReorderComponent,
    PharmacistEditstockComponent,
    PharmacistEditmedicineComponent,
    PharmacistEditcompanyComponent,
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
      MatCardModule,

      MatMenuModule,
      MatPaginatorModule
      
  ]
})
export class PharmacistModule { }
