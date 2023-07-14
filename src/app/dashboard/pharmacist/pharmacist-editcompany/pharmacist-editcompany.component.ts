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
  constructor(public listcompany:AddstockService,private route:ActivatedRoute,private router:Router) { }

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
      alert("Contact number should be 10 digits");
      return;
    }
/*
* add other validations here
*/
console.log(this.companyForm);
this.listcompany.insertCompany(this.companyForm).then((response)=>{
  console.log(response);
  alert("Company details updated successfully");
  this.router.navigate(['dashboard/pharmacist/list-company'])
});

  }

  cancel(){
    this.router.navigate(['dashboard/pharmacist/list-company'])

  }
}
