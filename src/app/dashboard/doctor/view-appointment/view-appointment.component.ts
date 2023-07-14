import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/app/helper/helper';
import {DoctorListService} from 'src/app/service/doctor-list.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.scss']
})
export class ViewAppointmentComponent implements OnInit {
  help=new Helper();
  appointmentList:any;
  constructor(private doctorListService:DoctorListService,private router: Router) { }

  ngOnInit(): void {
    this.getAppointmentList();

    
    
    

  }
  //get todays appoinment List
getAppointmentList(){
  var a=this.help.getValueFromSessionAndLocal(true,"userInfo");
    console.log(a.userId);
    this.doctorListService.getPatientAppoinmentList(a.userId).subscribe(
      (patients: any[]) => {
        // Handle the retrieved patient data
        this.appointmentList=patients;
        console.log(patients);
      },
      (error) => {
        // Handle error response
        console.error(error);
      }
    );
}

//go to diagnosis page
goToDiagnosisPage(appointment: any) {
  this.router.navigate(['/dashboard/doctor/diagnosis',appointment.appointmentId,appointment.patientId,
  appointment.patient.patientName,
  appointment.patient.bloodGroup,
  appointment.patient.age,
  appointment.patient.gender
]);
  
}



}

