import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{DashboardRoutingModule} from './dashboard-routing.module';
import { RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';






@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule
    
   
  ]
})
export class DashboardModule { }
