import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 import{SessionService} from 'src/app/service/sessionService';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private sessionService:SessionService,private router :Router) { }

  ngOnInit(): void {
  }
  
  loginFunction(){
   

// backend response
var staff:any={roleId:3, staffName:"Steena"};

        this.sessionService.staff=staff;
        this.sessionService.accessToken='sfjhbas-fhbnkj3hrbs-dhfbakn';

        switch (staff.roleId) {
          case 1:
            this.router.navigate(['dashboard/receptionist']);
            break;
          case 2:
            this.router.navigate(['dashboard/doctor']);
          break;
          case 3:
            this.router.navigate(['dashboard/pharmacist']);
          break;
          default:
            alert('You are not a valid user')
            break;
        }
  }
}
