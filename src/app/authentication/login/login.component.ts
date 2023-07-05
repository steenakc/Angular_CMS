import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 import{SessionService} from 'src/app/service/sessionService';
 import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private sessionService:SessionService,private router :Router) { }

  ngOnInit(): void {
  }
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  
  loginFunction(){
   

// backend response
var staff:any={roleId:4, staffName:"Steena"};

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
          case 4:
            this.router.navigate(['/dashboard/lab-technician']);
            break;
          default:
            alert('You are not a valid user')
            break;
        }
  }
}
