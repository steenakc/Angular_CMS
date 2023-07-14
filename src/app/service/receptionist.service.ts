import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './apiservice';
import { SessionService } from './sessionService';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { promises } from 'dns';


@Injectable({
  providedIn: 'root'
})

export class ReceptionistService extends ApiService {

  constructor(private http: HttpClient, private sessionService: SessionService) {
    super(http, sessionService);
  }


  insertPatient(addPatient: any): Promise<any> {
    // request body
    return this.doPost(environment.apiUrl + "/receptionist/add-patient", addPatient);
  }
  cancelAppointment(appointmentId: any): Promise<any> {
    return this.doDelete(environment.apiUrl + `/receptionist/cancel-appointment?appointmentId=${appointmentId}`, null);
  }
  

  addAppointment(addAppointment:any):Promise<any>{
    return this.doPost(environment.apiUrl+"/receptionist/appointment",addAppointment);
  }
  patientList() {
    // return this.http.get<any>();
    return this.doGet(environment.apiUrl + "/receptionist/patientIsActive");
  }



  deletePatient(patientId: any) {
    return this.doDelete(environment.apiUrl + `/receptionist/diasble-patient/${patientId}`);

  }

  updatePatient(editPatient: any): Promise<any> {
    return this.doPut(environment.apiUrl + `/receptionist/edit-patient`, editPatient);
  }

  getPatientDetailsFromPatientId(patientId: any) {
    return this.doGet(environment.apiUrl + `/receptionist/get-patient/${patientId}`); 
  }



  getappointmentDetailsFromAppointmentId(appointmentId:any){
    return this.doGet(environment.apiUrl+`/receptionist/get-appointment/${appointmentId}`);
  }
  getDepartments(){
    return this.doGet(environment.apiUrl + "/receptionist/departments");

  }

  searchPatientByNameOrPhoneNumber(searchTerm:any){
    return this.doGet(environment.apiUrl+`/receptionist/search-patient?searchTerm=${searchTerm}`)
  }
  getBillDetails(appointmentId:any){
    return this.doGet(environment.apiUrl+`/receptionist/generate-bill?appointmentId=${appointmentId}`)
  }
  markBillAsPaid(patientBillId:any){
    return this.doGet(environment.apiUrl+`/receptionist/mark-bill-paid?patientBillId=${patientBillId}`)
  }
  


  // deleteStock(medicineId: number): Observable<any> {
  //   const url = `${environment.apiUrl}/api/stock/${medicineId}`;
  //   return this.http.delete(url);
  // }

  populateDashboardDetails(departmentId: number, date: string) {
    //   //request param
    return this.doGet(environment.apiUrl + `/receptionist/dashboard-appointmnets-details?departmentId=${departmentId}&date=${date}`)

    // another way to write request param
    //return this.doGet(environment.apiUrl + "/receptionist/dashboard-appointmnets-details?departmentId=" + departmentId + "&date=" + date)
   
    // pathparam
    // return this.http.get<any>(environment.apiUrl+"/receptionist/dashboard-appointmnets-details/"+departmentId+"&"+date)

  }
}

