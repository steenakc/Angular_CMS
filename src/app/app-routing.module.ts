import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteComponent } from './website/website.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'website',
    pathMatch:'full'
},
{
  path:'website',
  component:WebsiteComponent
  
},
  {
    path:'authenticate',
    loadChildren:()=>import('./authentication/authentication.module').then(m=>m.AuthenticationModule)
  },
  {
    path:'dashboard',
    loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
