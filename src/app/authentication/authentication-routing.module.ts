import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {AuthenticationComponent} from './authentication.component';

const routes: Routes = [
  {
    path:'',
    component:AuthenticationComponent,
     children: [
      {
        path:'',
        redirectTo:'login',
       pathMatch:'full'
    },
{
    path:'login',
component:LoginComponent
},
 {
    path:'change-password',
    component:ChangePasswordComponent
 },
 {
    path:'forgot-password',
    component:ForgotPasswordComponent
 }
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
