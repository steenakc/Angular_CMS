import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ReceptionistService } from 'src/app/service/receptionist.service';

@Component({
  selector: 'app-receptionist-list-patient',
  templateUrl: './receptionist-list-patient.component.html',
  styleUrls: ['./receptionist-list-patient.component.scss']
})
export class ReceptionistListPatientComponent implements OnInit {
  patientId: number = 0;
  doctorId: number = 0;
  departmentId: number = 0;
  date: any = null;
  time: any = null;
  searchTerm: any = '';
  input: any;

  patientList: ReceptionistService[]=[];

  constructor(private route: ActivatedRoute, private receptionistService: ReceptionistService,
    private router: Router) {
    this.route.queryParams.forEach(params => {
      if (params["patientId"] != undefined && +params["patientId"] != this.patientId) {
        this.patientId = +params["patientId"];
      }
      if (params["doctorId"] != undefined && +params["doctorId"] != this.doctorId) {
        this.doctorId = +params["doctorId"];
      }
      if (params["departmentId"] != undefined && +params["departmentId"] != this.departmentId) {
        this.departmentId = +params["departmentId"];
      }
      if (params["date"] != undefined && params["date"] != null) {
        this.date = params["date"];
      }
      if (params["time"] != undefined && params["time"] != null) {
        this.time = params["time"];
      }
    });

  }

  addPatient() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "doctorId": this.doctorId,
        "date": this.date,
        "time": this.time,
        "departmentId": this.departmentId,
        "index": Math.round(Math.random() * 10000),
      },
      skipLocationChange: false
    };
    this.router.navigate(['/dashboard/receptionist/new-patient'], navigationExtras);
  }

  ngOnInit(): void {
    this.listPatient()

  }
  listPatient() {
    this.receptionistService.patientList().then((result) => {
      console.warn(result)
      if (this.patientId <= 0) {
        this.patientList = result;
      } else {
        result.forEach(element => {
          if (element.patientId === this.patientId) {
            this.patientList.push(element);
          }
        });
      }
    })
  }

  loadPatientFromPatientId() {

  }

  disablePatient(patientId: any) {
    console.warn("patient id", patientId)
    this.receptionistService.deletePatient(patientId).then((result) => {
      // if (result) {
      this.listPatient();

      // }
      alert("deleted successfully.....");
    })
  }
  updatePatient(patientId: number): void {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        "patientId": patientId,
        "index": Math.round(Math.random() * 10000),
      },
      skipLocationChange: false
    };
    this.router.navigate(['/dashboard/receptionist/update-patient'], navigationExtras);

  }
  bookAppointment(patientId: number): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "doctorId": this.doctorId,
        "date": this.date,
        "time": this.time,
        "departmentId": this.departmentId,
        "patientId": patientId,
        "index": Math.round(Math.random() * 10000),
      },
      skipLocationChange: false
    };
    this.router.navigate(['/dashboard/receptionist/book-appointment'], navigationExtras);


  }

  applyFilter() {
    this.receptionistService.searchPatientByNameOrPhoneNumber(this.searchTerm).then((response) => {
      console.log(response);
      this.patientList = response;
    });
  }


  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

}
