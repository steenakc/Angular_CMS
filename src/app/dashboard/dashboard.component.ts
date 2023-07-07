import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import{SessionService} from 'src/app/service/sessionService';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private sessionService:SessionService,private router :Router) { }
staffName:string='';
  ngOnInit(): void {
    this.staffName=this.sessionService.staff.userFullName;
  }
  loginOut(){
    this.router.navigate(['/authenticate'])
  }

}