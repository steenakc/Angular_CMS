import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from 'src/environments/environment';
import { ApiService } from './apiservice';
import { SessionService } from './sessionService';

@Injectable({
  providedIn: 'root'
})

export class AddtestService extends ApiService{
  
  constructor(private http: HttpClient, private sessionService: SessionService) {
      super(http, sessionService);
    }
      
  
    insertTest(addtestservice:any): Promise<any> {
       return this.doPost(environment.apiUrl+"/api/labtests",addtestservice);
     }

     insertResult(addresultservice:any): Promise<any> {
      return this.doPost(environment.apiUrl+"/api/testpres",addresultservice);
    }
  
     testList(){
      return this.http.get<any>(environment.apiUrl+"/api/labtests");
     }

     testListById(labTestId:any): Observable<any>{
      console.log(labTestId);
      return this.http.get(environment.apiUrl +"/api/tests/"+labTestId); 
     }

     patientList(){
      return this.http.get<any>(environment.apiUrl+"/api/testpres");
     }

     patientListById(testPrescriptionId:any): Observable<any>{
      console.log(testPrescriptionId);
      return this.http.get(environment.apiUrl +"/api/tests/"+testPrescriptionId); 
     }


     reportList(){
      return this.http.get<any>(environment.apiUrl+"/api/testpres");
     }

     reportListById(testPrescriptionId:any): Observable<any>{
      console.log(testPrescriptionId);
      return this.http.get(environment.apiUrl +"/api/tests/"+testPrescriptionId); 
     }


     updateTest(updatetestservice:any): Promise<any> {
        return this.doPut(environment.apiUrl+"/api/labtests",updatetestservice);
      }

      deleteTest(labTestId: number): Observable<any> {
        const url = `${environment.apiUrl}/api/test/${labTestId}`;
        return this.http.delete(url);
      }



  
}