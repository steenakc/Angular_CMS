import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabTechnicianComponent } from './lab-technician.component';
import { LabHomeComponent } from './lab-home/lab-home.component';
import { LabTestListComponent } from './lab-test-list/lab-test-list.component';
import { LabTestAddComponent } from './lab-test-add/lab-test-add.component';
import { LabTestUpdateComponent } from './lab-test-update/lab-test-update.component';
import { LabPatientListComponent } from './lab-patient-list/lab-patient-list.component';
import { LabPatientTestComponent } from './lab-patient-test/lab-patient-test.component';
import { LabPatientTestResultComponent } from './lab-patient-test-result/lab-patient-test-result.component';
import { AddresultComponent } from './addresult/addresult.component';
import { EditresultComponent } from './editresult/editresult.component';


const routes: Routes = [
  {
    path:'',
    component:LabTechnicianComponent,
    children: [
      {
        path:'',
        redirectTo:'lab-home',
        pathMatch:'full'
    },
      {
        path: 'lab-home',
        component: LabHomeComponent,
      },
      {
        path: 'lab-test-list',
        component: LabTestListComponent,
      },
      {
        path: 'lab-test-add',
        component: LabTestAddComponent,
      },
      {
        path: 'lab-test-update/:labTestId',
        component: LabTestUpdateComponent,
      },
      {
        path: 'lab-patient-list',
        component: LabPatientListComponent,
      },
      {
        path: 'editresult',
        component: EditresultComponent,
      },
      {
        path: 'addresult/:testPrescriptionId',
        component: AddresultComponent,
      },
      {
        path: 'lab-patient-test',
        component: LabPatientTestComponent,
      },
      {
        path: 'lab-patient-test-result',
        component: LabPatientTestResultComponent,
      }
    ]
}
,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabTechnicianRoutingModule { }
