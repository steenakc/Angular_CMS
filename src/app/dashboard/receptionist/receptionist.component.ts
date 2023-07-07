import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrls: ['./receptionist.component.scss']
})
export class RecptionistComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  addPatient(){
    this.router.navigate(['/dashboard/receptionist/new-patient'])

  }

}
