import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebsiteComponent } from './website/website.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule,Routes } from '@angular/router';
import { PharmacistComponent } from './dashboard/pharmacist/pharmacist.component';
import { PharmacistModule } from './dashboard/pharmacist/pharmacist.module';


@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    PharmacistComponent,
    
  ],

  imports: [
    NgModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut:1000,
      positionClass:'toast-top-right',
      preventDuplicates:true
    }),
   
    RouterModule,
    //PharmacistModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
