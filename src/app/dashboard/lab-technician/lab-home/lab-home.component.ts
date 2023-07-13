import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab-home',
  templateUrl: './lab-home.component.html',
  styleUrls: ['./lab-home.component.scss']
})
export class LabHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToTestList(){
    this.router.navigate(['/dashboard/lab-technician/lab-test-list'])
  }

  navigateToPatientList(){
    this.router.navigate(['/dashboard/lab-technician/lab-patient-list'])
  }

  navigateToTestResultList(){
    this.router.navigate(['/dashboard/lab-technician/lab-patient-test-result'])
  }

}
