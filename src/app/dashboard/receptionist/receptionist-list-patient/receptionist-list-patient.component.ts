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
  searchTerm: any = '';
  input: any;

  patientList: ReceptionistService[];

  constructor(private route: ActivatedRoute, private listpatient: ReceptionistService, private receptionistService: ReceptionistService, private router: Router) {
    this.route.queryParams.forEach(params => {
      if (params["patientId"] != undefined && +params["patientId"] != this.patientId) {
        this.patientId = +params["patientId"];
      }
    });
    if (this.patientId > 0) {
      this.loadPatientFromPatientId();
    } else {

    }
  }

  ngOnInit(): void {
    this.listPatient()

  }
  listPatient() {
    this.listpatient.patientList().then((result) => {
      console.warn(result)
      this.patientList = result;
    })
  }

  loadPatientFromPatientId() {
    alert(this.patientId);
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
