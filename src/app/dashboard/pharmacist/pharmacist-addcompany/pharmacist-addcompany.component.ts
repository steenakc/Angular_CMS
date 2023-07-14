import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddstockService } from 'src/app/service/addstock.service';

@Component({
  selector: 'app-pharmacist-addcompany',
  templateUrl: './pharmacist-addcompany.component.html',
  styleUrls: ['./pharmacist-addcompany.component.scss']
})
export class PharmacistAddcompanyComponent implements OnInit {

  companyForm:any={
    medicneCompanyId:'',
    companyName:'',
    companyAddress:'',
    contactNo:'',
    
  }

  constructor(public addcompanyService:AddstockService,private router:Router) { }

  ngOnInit(): void {
  }

  submitCompany(){
    if (!this.companyForm.companyName) {
      alert("Company name should not be empty");
      return;
    }
    if (!this.companyForm.companyAddress) {
      alert("Company address should not be empty");
      return;
    }
    if (!this.companyForm.contactNo) {
      alert("Emergency contact number should not be empty");
      return;
    }
    if (this.companyForm.contactNo.length !== 10) {
      alert("Emergency contact number should be 10 digits");
      return;
    }
  /*
  * add other validations here
  */
      console.log(this.companyForm);
      this.addcompanyService.insertCompany(this.companyForm).then((response)=>{
        console.log(response);
        alert("Company added successfully");
        this.router.navigate(['dashboard/pharmacist/list-company']);

      });
    }

  cancel(){
    this.router.navigate(['dashboard/pharmacist/add-medicine']);

  }
}
