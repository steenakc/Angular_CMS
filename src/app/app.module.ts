import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebsiteComponent } from './website/website.component';
import { HttpClientModule } from '@angular/common/http';


import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    
    
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
