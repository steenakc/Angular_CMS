import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PharmacistComponent } from './pharmacist.component';
import { PharmacistAddstockComponent } from './pharmacist-addstock/pharmacist-addstock.component';
import {PaharmacistStockmanagmentComponent} from './paharmacist-stockmanagment/paharmacist-stockmanagment.component';
import { PharmacistListstockComponent } from './pharmacist-liststock/pharmacist-liststock.component';
import { PharmacistAddmedicineComponent } from './pharmacist-addmedicine/pharmacist-addmedicine.component';
import { PharmacistListmedicineComponent } from './pharmacist-listmedicine/pharmacist-listmedicine.component';
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

const routes: Routes = [
   {
     path:'',
     component:PharmacistComponent,
     children: [
      {
        path:'',
         redirectTo:'stock',
        pathMatch:'full'
     },
     {
       path:'stock',
       component:PaharmacistStockmanagmentComponent
     },
     {
      path:'add-stock',
      component:PharmacistAddstockComponent
    },
    {
      path:'list-stock',
      component:PharmacistListstockComponent
    },
    {
      path:'edit-stock/:medicineStockId',
      component:PharmacistEditstockComponent
    },
    {
      path:'add-medicine',
      component:PharmacistAddmedicineComponent
    },
    {
      path:'list-medicine',
      component:PharmacistListmedicineComponent
    },
    {
     path:'add-company',
      component:PharmacistAddcompanyComponent
    },
    {
      path:'list-company',
      component:PharmacistListcompanyComponent
    },
    {
      path:'list-prescription',
      component:PharmacistListprescriptionComponent
    },
    {
      path:'list-medicineprescription/:appointmentId',
      component:PharmacistListmedicineprescriptionComponent
    },
    {
      path:'bill/:appointmentId',
      component:PharmacistBillComponent
    },
    {
      path:'generate-bill/:appointmentId',
      component:PharmacistGeneratebillComponent
    },
   {
    path:'reorder',
    component:PharmacistReorderComponent
   },
   {
    path:'edit-medicine/:medicineId',
    component:PharmacistEditmedicineComponent
   },
   {
    path:'edit-company/:medicneCompanyId',
    component:PharmacistEditcompanyComponent
   }
    ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacistRoutingModule { }
