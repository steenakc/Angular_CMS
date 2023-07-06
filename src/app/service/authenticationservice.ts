import { Injectable } from '@angular/core';
import { ApiService } from './apiservice';
import { HttpClient } from '@angular/common/http';
import { SessionService } from './sessionService';


@Injectable({
    providedIn: 'root'
  })
export class Authenticationservice  extends ApiService{
    constructor(private http: HttpClient, private sessionService: SessionService) {
        super(http, sessionService);
      }
      /*
      */ 
   static  serverHost="http://localhost:9091/";
     /*
      */
     stafLogin(loginData:any): Promise<any> {
      // request body
        return this.doPost(Authenticationservice.serverHost+"login/user",loginData);
      }
      // path variable 
      // api/receptionist/isActive/steena&steena123
      // request param
      // api/receptionist/isActive?username=steena&password=steena123 
}
