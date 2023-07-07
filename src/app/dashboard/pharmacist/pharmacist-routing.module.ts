import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PharmacistComponent } from './pharmacist.component';
import { PharmacistAddstockComponent } from './pharmacist-addstock/pharmacist-addstock.component';
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
       path:'add-stock',
       component:PharmacistAddstockComponent
     }
    ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacistRoutingModule { }
