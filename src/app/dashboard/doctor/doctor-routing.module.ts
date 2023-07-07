import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';


const routes: Routes = [
  {
    path:'',
    component:DoctorComponent,
    children: [
      {
        path:'',
        redirectTo:'view-appointment',
        pathMatch:'full'
    },
    {
      path:'view-appointment',
      component:ViewAppointmentComponent,

    }
    ,
    {
      path:'diagnosis',
      component:DiagnosisComponent,

    }
      
    ]
}
,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
