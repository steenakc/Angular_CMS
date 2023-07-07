import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab-technician',
  templateUrl: './lab-technician.component.html',
  styleUrls: ['./lab-technician.component.scss']
})
export class LabTechnicianComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  navigateToAddLabTest(){
    this.router.navigate(['/dashboard/lab-technician/lab-test-add'])

  }
  navigateToLabTechnicianHome(){
    this.router.navigate(['/dashboard/lab-technician/lab-home'])

  }

}
