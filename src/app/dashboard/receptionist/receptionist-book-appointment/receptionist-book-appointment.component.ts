import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ReceptionistService } from 'src/app/service/receptionist.service';

@Component({
  selector: 'app-receptionist-book-appointment',
  templateUrl: './receptionist-book-appointment.component.html',
  styleUrls: ['./receptionist-book-appointment.component.scss'],
  providers: [DatePipe]
})
export class ReceptionistBookAppointmentComponent implements OnInit {

  patientId: number;
  index: number;
  departments: any[];
  doctor: any;
  doctorIdSelected: number = 0;
  appointment_id:number;

  patientList: ReceptionistService[];
  patientListForBooking: any;
  dateSelected = null;
  departmentIdSelected: number = 0;
  doctorList: any[] = [];
  timeSelected:any[];
  dateTimeFormat:any;

 
 






  constructor(private receptionistService: ReceptionistService, private datePipe: DatePipe, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.patientId = +params.get('patientId');
      this.index = +params.get('index');

      // Call a method or perform any other logic with the retrieved values
      this.getPatientDetails(this.patientId);
    });
    this.listDepartments();
  }

  getPatientDetails(patientId: any) {
    // Use the patientId to fetch patient details from the database or perform any other necessary operations
    // ...
    console.warn("patient id", patientId)
    this.receptionistService.getPatientDetailsFromPatientId(patientId).then((result) => {
      // if (result) {
      // console.warn(result)
      // this.patientList = result;
      console.warn(result)
      this.patientListForBooking = result;

      // }

    })
  }
  onDateChange(event: any) {
    const selectedDate: Date = event.value;
    // Do something with the selected date
    console.log('Selected date:', selectedDate);
    const formattedDate = this.datePipe.transform(selectedDate, 'yyyy-MM-dd');
    this.dateSelected = formattedDate;
    console.log(formattedDate); // Output: "2023 07 09" (example date format)
    this.doctorIdSelected = 0;
    this.doctor = null;
    if (this.dateSelected != null && this.departmentIdSelected > 0) {
      this.populateDashboardDetails();
    }
  }
  //   // You can store or use the formatted date in your component's logic
  // }
  // onDateTimeChange(dateTimeValue: string){
  //   const formattedDateTime = this.datePipe.transform(dateTimeValue, 'yyyy-MM-dd HH:mm:ss');
  //   console.log('Formatted datetime:', formattedDateTime);
  //   this.dateSelected = formattedDateTime;
  //   if (this.dateSelected != null && this.departmentIdSelected > 0) {
  //     this.populateDashboardDetails();
  //   }
  // }
  onDepartmentChange() {

    console.log('department:', this.departmentIdSelected
    );
    this.doctorIdSelected = 0;
    this.doctor = null;
    if (this.dateSelected != null && this.departmentIdSelected > 0) {
      this.populateDashboardDetails();

    }
  }
  onDoctorChange() {
    console.log('doctor:', this.doctorIdSelected);
    // if(this.dateSelected !=null&& this.doctorIdSelected>0){
    //   this.populateDashboardDetails();
    // }

    this.doctorList.forEach(element => {
      if (element.doctor.doctorId === this.doctorIdSelected) {
        this.doctor = element;
      }
    });

  }
  listDepartments() {
    this.receptionistService.getDepartments().then((result) => {
      this.departments = result;
    });
  }

  populateDashboardDetails() {
    this.receptionistService.populateDashboardDetails(this.departmentIdSelected, this.dateSelected).then((response) => {
      console.log(response);
      this.doctorList = response;
    });


  }

  // submitAppointment() {
  //   console.log(this.patientListForBooking);
  //   console.log(this.dateSelected);
  //   console.log(this.departmentIdSelected);
  //   console.log(this.doctorIdSelected);
   
  //  var dateTimeFormat=(this.dateSelected+' '+this.timeSelected);
  //  console.log(dateTimeFormat);
  //  this.receptionistService.addAppointment(this.dateTimeFormat).then((result)=>
  //  {
  //   alert("appointment added....")
  //   console.log("appointment",result)
  //  })

  //}
  submitAppointment() {
    console.log(this.patientListForBooking);
    console.log(this.dateSelected);
    console.log(this.departmentIdSelected);
    console.log(this.doctorIdSelected);
       var dateTimeFormat=(this.dateSelected+' '+this.timeSelected);
         console.log(dateTimeFormat);


  
    // Create an object to hold the appointment details
    const addAppointment = {
      patientId: this.patientListForBooking.patientId,
      date: this.dateSelected,
      departmentId: this.departmentIdSelected,
      doctorId: this.doctorIdSelected,
      //appointmentDateTime: dateTimeFormat
    };
  
    this.receptionistService.addAppointment(addAppointment)
      .then((result) => {
        alert("Appointment added successfully!");
        console.log("Appointment:", addAppointment);
       // this.appointmentFormRedirect;

        this.appointmentFormRedirect(result.appointmentId); 
        
        
      })
      .catch((error) => {
        console.error("Error adding appointment:", error);
        alert("Failed to add appointment. Please try again.");
      });

    }
   appointmentFormRedirect(appointmentId:number):void{
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "AppointmentId": appointmentId,
          "index": Math.round(Math.random() * 10000),
      },
      skipLocationChange: false
  };
  this.router.navigate(["/dashboard/receptionist/view-appointment"],navigationExtras);
   }

  
  cancel() {

  }

}
















