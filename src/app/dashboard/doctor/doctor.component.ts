import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  listAppointments(){
    this.router.navigate(['/dashboard/doctor/view-appointment'])

  }

}
