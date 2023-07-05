import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {AuthenticationRoutingModule} from './authentication-routing.module'; 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import { AuthenticationComponent } from './authentication.component';





@NgModule({
  declarations: [LoginComponent, ChangePasswordComponent, ForgotPasswordComponent, AuthenticationComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
     MatIconModule,
     MatFormFieldModule,
      MatInputModule,
      FormsModule, ReactiveFormsModule, 
  ]
})
export class AuthenticationModule {
 
  
 }
