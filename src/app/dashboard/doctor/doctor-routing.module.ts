import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { DoctorPrescriptionComponent } from './doctor-prescription/doctor-prescription.component';

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
      path:'doctor-prescription/:appointmentId/:patientId',
      component:DoctorPrescriptionComponent,

    }
    ,
    {
      path:'diagnosis/:appointmentId/:patientId/:patientName/:bloodGroup/:age/:gender',
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
