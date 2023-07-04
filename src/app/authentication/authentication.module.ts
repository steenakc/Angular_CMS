import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {AuthenticationRoutingModule} from './authentication-routing.module'; 


@NgModule({
  declarations: [LoginComponent, ChangePasswordComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
