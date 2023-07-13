import { Component, OnInit } from '@angular/core';
import { AddtestService } from 'src/app/service/addtest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab-patient-list',
  templateUrl: './lab-patient-list.component.html',
  styleUrls: ['./lab-patient-list.component.scss']
})
export class LabPatientListComponent implements OnInit {

  patientlist:any[

  ]

  constructor(private listpatient:AddtestService,private router: Router) { }

  
  ngOnInit(): void {
    this.listpatient.patientList().subscribe((result)=>{
      console.warn(result)
      this.patientlist=result;
    })

  }

  navigateToAddResult(testPrescriptionId:number){
    this.router.navigate(["/dashboard/lab-technician/addresult",testPrescriptionId])
  }
  

  
}