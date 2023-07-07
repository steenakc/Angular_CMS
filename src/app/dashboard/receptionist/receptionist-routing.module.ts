import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecptionistComponent } from './receptionist.component';
import { ReceptionistSearchComponent } from './receptionist-search/receptionist-search.component';
import { ReceptionistNewPatientComponent } from './receptionist-new-patient/receptionist-new-patient.component'

const routes: Routes = [
  {
    path:'',
    component:RecptionistComponent,
    children: [
      {
        path:'',
        redirectTo:'search',
        pathMatch:'full'
    },
      {
        path: 'search',
        component: ReceptionistSearchComponent,
      },
      {
        path: 'new-patient',
        component: ReceptionistNewPatientComponent,
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
