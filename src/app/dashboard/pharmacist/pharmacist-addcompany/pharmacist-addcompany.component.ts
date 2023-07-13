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
        alert("Enter the medicine name");
        return;
      }
      if (!this.companyForm.companyAddress) {
        alert("Enter a valid address");
        return;
      }
      if (!this.companyForm.contactNo) {
        alert("Select the company");
        return;
      }
  /*
  * add other validations here
  */
      console.log(this.companyForm);
      this.addcompanyService.insertCompany(this.companyForm).then((response)=>{
        console.log(response);
        alert("data added successfully");
      });
  
    }

  cancel(){
    this.router.navigate(['dashboard/pharmacist/add-medicine']);

  }
}
