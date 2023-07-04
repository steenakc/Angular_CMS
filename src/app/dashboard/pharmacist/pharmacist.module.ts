import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacistComponent } from './pharmacist.component';
import {PharmacistRoutingModule} from  './pharmacist-routing.module';

import { PaharmacistStockmanagmentComponent } from './paharmacist-stockmanagment/paharmacist-stockmanagment.component';

@NgModule({
  declarations: [PharmacistComponent, PaharmacistStockmanagmentComponent],
  imports: [
    CommonModule,
    PharmacistRoutingModule
  ]
})
export class PharmacistModule { }
