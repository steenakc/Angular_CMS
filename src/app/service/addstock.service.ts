import { Injectable } from '@angular/core';
import { Addstock } from './addstock';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from 'src/environments/environment';
import { ApiService } from './apiservice';
import { SessionService } from './sessionService';

@Injectable({
  providedIn: 'root'
})

export class AddstockService extends ApiService{
  constructor(private http: HttpClient, private sessionService: SessionService) {
      super(http, sessionService);
    }
      
   
    /*
     */
    insertStock(addstock:any): Promise<any> {
     // request body
       return this.doPost(environment.apiUrl+"/api/stock",addstock);
     }
  

  // //Add Stock
  // insertStock(medstock:Addstock)
  // {
  //    this.httpClient.post(environment.apiUrl+"/api/stock",medstock).toPromise().then(response => {
  //     console.log(response);
  //   })
  
  // }

  // //Update Employee
  // UpdateStock(medstock:Addstock):Observable<any>{
  //   return this.httpClient.put(environment.apiUrl+"/api/stock",medstock)
  //   }
}
