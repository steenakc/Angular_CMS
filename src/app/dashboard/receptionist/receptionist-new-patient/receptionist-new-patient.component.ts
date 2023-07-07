import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receptionist-new-patient',
  templateUrl: './receptionist-new-patient.component.html',
  styleUrls: ['./receptionist-new-patient.component.scss']
})
export class ReceptionistNewPatientComponent implements OnInit {

  patientForm:any={
    name:'',
    age:'',
    gender:null,
    bloodgroup:null,
  }
  constructor() { }

  ngOnInit(): void {
    this.patientForm.name="steena";
  }
  submitPatientForm(){
    console.log(this.patientForm);
  }
  cancel(){
    
  }
}
