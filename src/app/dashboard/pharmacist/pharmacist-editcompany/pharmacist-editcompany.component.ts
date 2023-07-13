import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddstockService } from 'src/app/service/addstock.service';

@Component({
  selector: 'app-pharmacist-editcompany',
  templateUrl: './pharmacist-editcompany.component.html',
  styleUrls: ['./pharmacist-editcompany.component.scss']
})
export class PharmacistEditcompanyComponent implements OnInit {

  companyForm:any={
    medicneCompanyId:'',
    companyName:'',
    companyAddress:'',
    contactNo:'',
    
  }
  medicneCompanyId:number;
  constructor(public listcompany:AddstockService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.listcompany.companyList().subscribe(
      (result: any[]) => {
        console.warn(result);
        this.companyForm = result;
      },
      (error: any) => {
        console.log(error);
      }
    );
    
    //getting the id passed from the browser URL
    this.medicneCompanyId=this.route.snapshot.params['medicneCompanyId'];
    this.listcompany.getCompany(this.medicneCompanyId).subscribe((data=>{
      console.log(data)
      this.companyForm=data;

   
      this.companyForm=Object.assign({},data);
    }),error=>console.log(error));
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
    this.listcompany.getCompany(this.companyForm).subscribe((response)=>{
      console.log(response);
      alert("data added successfully");
    });

  }

  cancel(){

  }
}
