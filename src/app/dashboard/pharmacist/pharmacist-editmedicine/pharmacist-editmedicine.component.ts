import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddstockService } from 'src/app/service/addstock.service';

@Component({
  selector: 'app-pharmacist-editmedicine',
  templateUrl: './pharmacist-editmedicine.component.html',
  styleUrls: ['./pharmacist-editmedicine.component.scss']
})
export class PharmacistEditmedicineComponent implements OnInit {

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

  medicineId:number;

  constructor(private route:ActivatedRoute,public addstockService:AddstockService,private router:Router) { }

  ngOnInit(): void {

    this.addstockService.getCompanyNames().subscribe(
      (response: any) => {
        this.company = response;
      },
      (error: any) => {
        console.log(error);
      }
    );

     //getting the id passed from the browser URL
     this.medicineId=this.route.snapshot.params['medicineId'];
     this.addstockService.getMedicine(this.medicineId).subscribe((data=>{
       console.log(data)
       this.medicineForm=data;
 
      //  //Chnaging the Date format 
      //  const datePipe = new DatePipe("en-UK");
      //  const formattedDate: any = datePipe.transform(data.expiryDate, 'yyyy-MM-dd');
      //  this.medicineForm.expiryDate = formattedDate;
       this.medicineForm=Object.assign({},data);
     }),error=>console.log(error));

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

    console.log(this.medicineForm);
    this.addstockService.insertMedicine(this.medicineForm).then((response)=>{
      console.log(response);
      alert("Medicine details updated successfully");
      this.router.navigate(['dashboard/pharmacist/list-medicine'])
    });

}
cancel(){
  this.router.navigate(['dashboard/pharmacist/list-medicine'])
}

}