import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecptionistComponent } from './receptionist.component';
import { ReceptionistSearchComponent } from './receptionist-search/receptionist-search.component';
import { ReceptionistNewPatientComponent } from './receptionist-new-patient/receptionist-new-patient.component'
import{ReceptionistListPatientComponent}from './receptionist-list-patient/receptionist-list-patient.component';
import { ReceptionistDashboardComponent } from './receptionist-dashboard/receptionist-dashboard.component';
import { ReceptionistBookAppointmentComponent } from './receptionist-book-appointment/receptionist-book-appointment.component';
import { ReceptionistUpdatePatientComponent } from './receptionist-update-patient/receptionist-update-patient.component';
import { RespAppointmentViewComponent } from './resp-appointment-view/resp-appointment-view.component';
import { RecepBillComponent } from './recep-bill/recep-bill.component';
const routes: Routes = [
  {
    path:'',
    component:RecptionistComponent,
    children: [
      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
    },
    {
      path: 'dashboard',
      component: ReceptionistDashboardComponent,
    },
      {
        path: 'search',
        component: ReceptionistSearchComponent,
      },
      {
        path: 'new-patient',
        component: ReceptionistNewPatientComponent,
      },
      {
        path: 'list-patient',
        component: ReceptionistListPatientComponent,
      },
      {
        path:'update-patient',
        component:ReceptionistUpdatePatientComponent,
      },
      {
        path:'book-appointment',
        component:ReceptionistBookAppointmentComponent,
      },
      {
        path:'view-appointment',
        component:RespAppointmentViewComponent,
        
      },
      {
        path:'recep-bill/:appointmentId',
        component:RecepBillComponent,
        
      }
    ]
}
,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionistRoutingModule { }
