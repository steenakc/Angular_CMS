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
  appointment_id: number;

  patientList: ReceptionistService[];
  patientListForBooking: any;
  dateSelected = null;
  departmentIdSelected: number = 0;
  doctorList: any[] = [];
  timeSelected: any[];
  dateTimeFormat: any;


  // doctorId: number = 0;
  // departmentId: number = 0;
  // date: any = new Date();
  // time: any = null;







  constructor(private receptionistService: ReceptionistService,
    private datePipe: DatePipe, private router: Router,
    private route: ActivatedRoute,) {

    // this.route.queryParams.forEach(params => {
    //   if (params["patientId"] != undefined && +params["patientId"] != this.patientId) {
    //     this.patientId = +params["patientId"];
    //   }
    //   if (params["doctorId"] != undefined && +params["doctorId"] != this.doctorId) {
    //     this.doctorId = +params["doctorId"];
    //   }
    //   if (params["departmentId"] != undefined && +params["departmentId"] != this.departmentId) {
    //     this.departmentId = +params["departmentId"];
    //   }
    //   if (params["date"] != undefined && params["date"] != null) {
    //     this.date = params["date"];
    //   }
    //   if (params["time"] != undefined && params["time"] != null) {
    //     this.time = params["time"];
    //   }}); 
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.patientId = +params.get('patientId');
      this.index = +params.get('index');
      // if (params["doctorId"] != undefined && +params["doctorId"] != this.doctorId) {
      //   this.doctorId = +params["doctorId"];
      // }
      // if (params["departmentId"] != undefined && +params["departmentId"] != this.departmentId) {
      //   this.departmentId = +params["departmentId"];
      // }
      // if (params["date"] != undefined && params["date"] != null) {
      //   this.date =(new Date(Date.parse(params["date"])), 'yyyy-MM-dd');
      //   console.log(this.date);
      // }
      // if (params["time"] != undefined && params["time"] != null) {
      //   this.time = params["time"];
      // }

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

    //  Formatting: 2023-07-14T07:25:43.045
    var dateTimeFormat = (this.dateSelected + 'T' + this.timeSelected + ".000");
    console.log(dateTimeFormat);



    // Create an object to hold the appointment details
    const addAppointment = {
      patientId: this.patientListForBooking.patientId,
      date: this.dateSelected,
      departmentId: this.departmentIdSelected,
      doctorId: this.doctorIdSelected,
      appointmentDateTime: dateTimeFormat
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
  appointmentFormRedirect(appointmentId: number): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "AppointmentId": appointmentId,
        "index": Math.round(Math.random() * 10000),
      },
      skipLocationChange: false
    };
    this.router.navigate(["/dashboard/receptionist/view-appointment"], navigationExtras);
  }


  cancel() {

  }

}
















