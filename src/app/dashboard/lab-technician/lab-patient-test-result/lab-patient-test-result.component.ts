import { Component, OnInit } from '@angular/core';
import { AddtestService } from 'src/app/service/addtest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab-patient-test-result',
  templateUrl: './lab-patient-test-result.component.html',
  styleUrls: ['./lab-patient-test-result.component.scss']
})
export class LabPatientTestResultComponent implements OnInit {

  reportlist:any[
    
  ]

  constructor(private listreport:AddtestService,private router: Router) { }

  ngOnInit(): void {
    this.listreport.reportList().subscribe((result)=>{
      console.warn(result)
      this.reportlist=result;
    })

  }

  navigateToEditResult(){
    this.router.navigate(['/dashboard/lab-technician/editresult'])
  }

  navigateToBill(){
    this.router.navigate(['/dashboard/lab-technician/lab-bill'])
  }

}



  
