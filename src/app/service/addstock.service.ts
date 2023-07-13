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
  
     insertMedicine(addmedicine:any): Promise<any>{
      return this.doPost(environment.apiUrl+"/api/medicine",addmedicine);
     }

     insertCompany(addCompany:any): Promise<any>{
      return this.doPost(environment.apiUrl+"/api/company",addCompany);

     }

     stockList(){
      return this.http.get<any>(environment.apiUrl+"/api/stock");
     }

     medicineStockById(medicineId:any){
      return this.doGet(environment.apiUrl + `/api/stocks/${medicineId}`); 
     }

     medicineList(){
      return this.http.get<any>(environment.apiUrl+"/api/medicine");

     }

     companyList(){
      return this.http.get<any>(environment.apiUrl+"/api/company");

     }

     prescriptionlist(){
      return this.http.get<any>(environment.apiUrl+"/api/prescribe");

     }

     prescriptionById(appointmentId:number){
      console.log(appointmentId)
      return this.http.get<any>(environment.apiUrl+`/api/prescribe/${appointmentId}`);

     }

     deleteStock(medicineStockId: number): Observable<any> {
      const url = `${environment.apiUrl}/api/stock/${medicineStockId}`;
      return this.http.delete(url);
    }
   

    deleteMedicines(medicineId:number): Observable<any> {
      const url = `${environment.apiUrl}/api/medicine/${medicineId}`;
      return this.http.delete(url);
    }

    deleteCompany(medicneCompanyId:number): Observable<any> {
      const url = `${environment.apiUrl}/api/company/${medicneCompanyId}`;
      return this.http.delete(url);
    }

    deletePrescription(medicnePrescriptionId:number): Observable<any>{
      const url = `${environment.apiUrl}/api/prescribe/${medicnePrescriptionId}`;
      return this.http.delete(url);
    }

    getMedicineNames(): Observable<string[]> {
      // Make an API call to fetch medicine names from the database
      return this.http.get<any>(environment.apiUrl+"/api/medicine");
    }

    getCompanyNames(): Observable<string[]>{
      return this.http.get<any>(environment.apiUrl+"/api/company");
    }

    updateStock(medicineStockId: number): Observable<any> {
      const url = `${environment.apiUrl}/api/stock/${medicineStockId}`;
    
      return this.http.put(url, medicineStockId);
    }

    getStock(medicineStockId:number): Observable<any> {
      console.log(medicineStockId);
      return this.http.get(environment.apiUrl+"/api/stock/"+medicineStockId)

    }

    getMedicine(medicineId:number): Observable<any> {
      console.log(medicineId);
      return this.http.get(environment.apiUrl+"/api/medicines/"+medicineId)
    }

    getCompany(medicneCompanyId:number): Observable<any> {
      console.log(medicneCompanyId);
      return this.http.get(environment.apiUrl+"/api/company/"+medicneCompanyId)

    }
    
}
