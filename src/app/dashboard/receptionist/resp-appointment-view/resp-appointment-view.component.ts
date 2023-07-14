import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceptionistService } from 'src/app/service/receptionist.service';

@Component({
  selector: 'app-resp-appointment-view',
  templateUrl: './resp-appointment-view.component.html',
  styleUrls: ['./resp-appointment-view.component.scss']
})
export class RespAppointmentViewComponent implements OnInit {
  patientDetailsForAppointment: any;
  AppointmentId:number;
  index:number;
  patientListForBooking:any;

  constructor(private receptionistService: ReceptionistService, private router: Router,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.AppointmentId = +params.get('AppointmentId');
      this.index = +params.get('index');

      // Call a method or perform any other logic with the retrieved values
      this.getAppointmentDetails(this.AppointmentId);
    });
  }

  getAppointmentDetails(AppointmentId: any) {
    // Use the patientId to fetch patient details from the database or perform any other necessary operations
    // ...
    console.warn("Appointment id", AppointmentId)
    this.receptionistService.getappointmentDetailsFromAppointmentId(AppointmentId)
    .then((result) => {
      // if (result) {
      // console.warn(result)
      // this.patientList = result;
      console.warn(result)
      this.patientDetailsForAppointment = result;

      // }

    })
  }
  confirmAppointment(AppointmentId:any){
    console.log(this.patientDetailsForAppointment);
    this.router.navigate(['/dashboard/receptionist/recep-bill',AppointmentId])

  }

  cancel(){

  }
  cancelAppointment(){
    if (confirm("Are You sure to cancel appointment") == true) {
    this.receptionistService.cancelAppointment(this.AppointmentId).then((response)=>{
      alert(response.message);
      this.router.navigate(['/dashboard/receptionist/list-patient'])
    });
  }
  }
  getDateFromAppointmentDate(datetime:any)
  {
    try {
      return datetime.substring(0,10);
    } catch (error) {
      
    }
    return "";
  }
  getTimeFromAppointmentDate(datetime:any)
  {
    try {
      return datetime.substring(11,23);
    } catch (error) {
      
    }
    return "";
  }
  }
  


