import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import{ReceptionistService}from 'src/app/service/receptionist.service'

@Component({
  selector: 'app-receptionist-new-patient',
  templateUrl: './receptionist-new-patient.component.html',
  styleUrls: ['./receptionist-new-patient.component.scss']
})
export class ReceptionistNewPatientComponent implements OnInit {
  doctorId: number = 0;
  departmentId: number = 0;
  date: any = null;
  time: any = null;

  addPatientForm:any={
    patientName:'',
    age:'',
    adress:'',
    gender:null,
    bloodGroup:null,
    phNo:'',
  }
  constructor( private route: ActivatedRoute,private receptionistService:ReceptionistService,private router :Router) {
    this.route.queryParams.forEach(params => {
    if (params["doctorId"] != undefined && +params["doctorId"] != this.doctorId) {
      this.doctorId = +params["doctorId"];
    }
    if (params["departmentId"] != undefined && +params["departmentId"] != this.departmentId) {
      this.departmentId = +params["departmentId"];
    }
    if (params["date"] != undefined &&params["date"]!=null) {
      this.date = params["date"];
    }
    if (params["time"] != undefined &&params["time"]!=null) {
      this.time = params["time"];
    }
  });
   }

  ngOnInit(): void {
  }
  submitPatientForm(){

    if (!this.addPatientForm.patientName) {
      alert("Enter Patient name");
      return;
    }
    if (this.addPatientForm.age == null || +this.addPatientForm.age < 0 || +this.addPatientForm.age > 150) {
      alert("Enter a valid age between 0 and 150.");
      return;
    }
    
    if (!this.addPatientForm.adress) {
      alert("Enter a valid address");
      return;
    }
    if (!this.addPatientForm.phNo) {
      alert("Enter Phone Number");
      return;
    }
    if(this.addPatientForm.phNo.length !==10){
      alert("Phone number should a 10 digit number ");
      return;
    }
   
    console.log(this.addPatientForm);
    this.receptionistService.insertPatient(this.addPatientForm).then((patientObj)=>
    {
      alert("Patient aded successfully........");
      
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "doctorId": this.doctorId,
          "date": this.date,
          "time": this.time,
          "departmentId":this.departmentId,
          "patientId": patientObj.patientId,
          "index": Math.round(Math.random() * 10000),
        },
        skipLocationChange: false
    };
    this.router.navigate(['/dashboard/receptionist/list-patient'], navigationExtras);
    })
  }
  cancel(){
    
  }
}
