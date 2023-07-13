import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddstockService} from 'src/app/service/addstock.service';

@Component({
  selector: 'app-pharmacist-addmedicine',
  templateUrl: './pharmacist-addmedicine.component.html',
  styleUrls: ['./pharmacist-addmedicine.component.scss']
})
export class PharmacistAddmedicineComponent implements OnInit {

  medicineForm:any={
    medicineId:'',
    medicineName:'',
    rate:'',
    medicneCompanyId:'',
    medicineCompany: {
      medicneCompanyId:'',
      companyName: ''
    }
  }

  company:any={
    companyName:'',
    medicneCompanyId:'',
  }

  constructor(public addstockService:AddstockService,private router:Router) { }

  ngOnInit(): void {
    this.addstockService.getCompanyNames().subscribe(
      (response: any) => {
        this.company = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  
  submitMedicine(){
    if (!this.medicineForm.medicineName) {
      alert("Enter the medicine name");
      return;
    }
    if (!this.medicineForm.rate || +this.medicineForm.rate < 1) {
      alert("Enter a valid rate greater than 0");
      return;
    }
    if (!this.medicineForm.medicneCompanyId) {
      alert("Select the company");
      return;
    }
/*
* add other validations here
*/
    console.log(this.medicineForm);
    this.addstockService.insertMedicine(this.medicineForm).then((response)=>{
      console.log(response);
      alert("data added successfully");
    });

  }
  cancel(){
    this.router.navigate(['dashboard/pharmacist/add-stock']);
    
  }

}
