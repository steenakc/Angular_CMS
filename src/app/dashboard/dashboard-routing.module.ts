import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {DashboardGuard} from './dasboard.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [DashboardGuard],
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: 'receptionist',
        loadChildren: () => import('./receptionist/receptionist.module').then(m => m.ReceptionistModule)
      },
      {
        path: 'doctor',
        loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule)
      },
      {
        path: 'pharmacist',
        loadChildren: () => import('./pharmacist/pharmacist.module').then(m => m.PharmacistModule)
      },
      {
        path: 'lab-technician',
        loadChildren: () => import('./lab-technician/lab-technician.module').then(m => m.LabTechnicianModule)
      }
    ]

},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
