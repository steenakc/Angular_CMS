import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ReceptionistService } from 'src/app/service/receptionist.service';

@Component({
  selector: 'app-receptionist-update-patient',
  templateUrl: './receptionist-update-patient.component.html',
  styleUrls: ['./receptionist-update-patient.component.scss']
})
export class ReceptionistUpdatePatientComponent implements OnInit {
  //patientId:number=0;

  editPatientForm: any = {
    patientId: 0,
    patientName: '',
    age: '',
    adress: '',
    gender: null,
    bloodGroup: null,
    phNo: '',
  }
  constructor(private receptionistService: ReceptionistService, private router: Router, private route: ActivatedRoute,) {
    this.route.queryParams.forEach(params => {
      if (params["patientId"] != undefined && +params["patientId"] !=0) {
        this.editPatientForm.patientId = +params["patientId"];
      }
    });
    console.log(this.editPatientForm);
    if (this.editPatientForm.patientId > 0) {
      this.getPatientDetailsFromPatientId();
    }
  }

  ngOnInit(): void {
  }
  submitUpdate() {
    console.log(this.editPatientForm);
    this.receptionistService.updatePatient(this.editPatientForm).then((patientObj)=>
    {
      alert("Patient aded successfully........");
      let navigationExtras: NavigationExtras = {
        queryParams: {
            "patientId": patientObj.patientId,
            "index": Math.round(Math.random() * 10000),
        },
        skipLocationChange: true
    };
    this.router.navigate(['/dashboard/receptionist/list-patient'], navigationExtras);
    })
  }
  
    

  
  getPatientDetailsFromPatientId() {
     this.receptionistService.getPatientDetailsFromPatientId(this.editPatientForm.patientId).then((response) => {
       this.editPatientForm = response;
     });
  }
  cancel() {

  }

}
