import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import{ReceptionistService}from 'src/app/service/receptionist.service'

@Component({
  selector: 'app-receptionist-new-patient',
  templateUrl: './receptionist-new-patient.component.html',
  styleUrls: ['./receptionist-new-patient.component.scss']
})
export class ReceptionistNewPatientComponent implements OnInit {

  addPatientForm:any={
    patientName:'',
    age:'',
    adress:'',
    gender:null,
    bloodGroup:null,
    phNo:'',
  }
  constructor(private receptionistService:ReceptionistService,private router :Router) { }

  ngOnInit(): void {
  }
  submitPatientForm(){
    console.log(this.addPatientForm);
    this.receptionistService.insertPatient(this.addPatientForm).then((patientObj)=>
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
  cancel(){
    
  }
}
