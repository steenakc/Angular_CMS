import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/sessionService';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Authenticationservice } from 'src/app/service/authenticationservice';
import { Helper } from 'src/app/helper/helper';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
help=new Helper();
  constructor(private sessionService: SessionService, private router: Router, private authenticationservice: Authenticationservice) { }

  ngOnInit(): void {
  }
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.pattern('')]);

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
    return this.password.hasError('password') ? 'Not a valid password' : '';
  }


  loginFunction() {
    console.log("email has error : " + this.email.hasError('required') || this.email.hasError('email'));
    console.log("password has error : " + this.password.hasError('required') || this.password.hasError('password'));

    if (this.email.hasError('required') || this.email.hasError('email') ||
      this.password.hasError('required') || this.password.hasError('password')) {
      return;
    }

    var loginData = {
      email: this.email.value,
      password: this.password.value
    }

    this.authenticationservice.stafLogin(loginData).then((response) => {
      console.log(response);
      try {
        if (!response.hasData) {
          alert(response.message); // dialog
          return;
        }
        /*
        */
       
        var staff = response.data;
        var accessToken = response.data.accessToken;

        this.sessionService.staff = staff;
        this.sessionService.accessToken = accessToken;
        this.help.setValueToSessionstorage(true,"userInfo",staff);

        /*
        */
       
        switch (staff.roleId) {
          case 1:
            this.router.navigate(['dashboard/receptionist']);
            break;
          case 2:
            this.router.navigate(['dashboard/pharmacist']);
            break;
          case 3:
            this.router.navigate(['dashboard/lab-technician']);
            break;
          case 4:
            this.router.navigate(['dashboard/doctor']);
            break;
          default:
            alert('You are not a valid user')
            break;
        }
        /*
        */
      } catch (error) {
        console.log(error);
        alert("something went wrong."); // dialog
      }

    });





  }
}
