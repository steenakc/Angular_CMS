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
export class DoctorListService extends ApiService {

  constructor(private http: HttpClient, private sessionService: SessionService) { 
    super(http, sessionService);
  }

  //todays Patient appointment list
  getPatientAppoinmentList(userId: number): Observable<any> {
    
    return this.http.get<any>(environment.apiUrl+"/api/doctor/"+userId);
  }
//diagnosis history
  getDiagnosisHistory(patientId: number): Observable<any> {
   
    return this.http.get<any>(environment.apiUrl+`/api/doctordiagnosis/${patientId}`);
  }
//insert diagnosis
  insertDiagnosis(diagnosis:any): Promise<any> {

      return this.doPost(environment.apiUrl+"/api/doctordiagnosis",diagnosis);
    }
//dosage list
    getDosage(): Observable<any>{
      return this.http.get<any>(environment.apiUrl+"/api/doctordosage");

    }
//medicine list
    getMedicineList():Observable<any>{
      return this.http.get<any>(environment.apiUrl+"/api/doctormedicinelist");
    }
//insert medical prescription  
  insertMedicinePrescription(MedicnePrescription:any):Promise<any>{
    return this.doPost(environment.apiUrl+"/api/doctorMedicinePrescription",MedicnePrescription);
  }
//medicine prescription history
  getMedicinePrescription(patientId: number): Observable<any> {
   
    return this.http.get<any>(environment.apiUrl+`/api/doctorMedicinePrescription/${patientId}`);
  }

//current medicine prescription
getMedicinePrescriptionAppoinmtment(appointmentId: number): Observable<any> {
   
  return this.http.get<any>(environment.apiUrl+`/api/doctorMedicinePrescriptionAppointment/${appointmentId}`);
}


//delete Medicine prescription
deleteMedicinePrescription(prescriptionId: number): Observable<any> {
  const url = `${environment.apiUrl}/api/doctorMedicinePrescription/${prescriptionId}`;
  return this.http.delete(url);

}
//=====================================LABORATORY======================================================
//test list
getTestList():Observable<any>{
  return this.http.get<any>(environment.apiUrl+"/api/doctorLabName");
}
//insert test prescription  
insertTestPrescription(TestPrescription:any):Promise<any>{
return this.doPost(environment.apiUrl+"/api/doctorLabPrescription",TestPrescription);
}
//test prescription history
getTestPrescription(patientId: number): Observable<any> {
console.log("im in");
return this.http.get<any>(environment.apiUrl+`/api/doctorLabPrescription/${patientId}`);
}

// //current test prescription
getTestPrescriptionAppoinmtment(appointmentId: number): Observable<any> {

return this.http.get<any>(environment.apiUrl+`/api/doctorTestPrescriptionAppointment/${appointmentId}`);
}


// //delete test prescription
deleteTestPrescription(prescriptionId: number): Observable<any> {
const url = `${environment.apiUrl}/api/doctorTestPrescription/${prescriptionId}`;

return this.http.delete(url);

}

//report
getTestPrescriptionReport(testPrescriptionId): Observable<any> {

  return this.http.get<any>(environment.apiUrl+`/api/doctorTestPrescriptionAppointmentreport/${testPrescriptionId}`);
  }


//next patient
nextPatient(appointmentId: number): Observable<any>{
  const url = `${environment.apiUrl}/api/doctorNextPatient/${appointmentId}`;

return this.http.delete(url);

}
}