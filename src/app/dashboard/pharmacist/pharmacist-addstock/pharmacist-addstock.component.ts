import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { AddstockService} from 'src/app/service/addstock.service';
import { Router } from '@angular/router';
import { Addstock } from 'src/app/service/addstock';

@Component({
  selector: 'app-pharmacist-addstock',
  templateUrl: './pharmacist-addstock.component.html',
  styleUrls: ['./pharmacist-addstock.component.scss']
})
export class PharmacistAddstockComponent implements OnInit {
  today: string;

  patientForm:any={
    medicineId:'',
    noOfBoxes:'',
    unitPerBox:'',
    expiryDate:'',
    medicineStockId:'',
    medicine: {
      medicineName: '',
      medicineCompany: {
          companyName: '',
      },
  }
  }

  med: any = {
    medicineName:'',
    medicineId:'',
    
  };

  stocks:Addstock[];
  formData:Addstock=new Addstock();

  constructor(public addstockService:AddstockService,private router:Router) { 
    this.today = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');

  }
  ngOnInit(): void {
    this.listStock()
  }
  
  listStock(){
    this.addstockService.getMedicineNames().subscribe((response) => {
      this.med = response;
    });
  }
  
  submitPatientForm(){
    if(!this.patientForm.medicineId){
      alert("Enter Medicine Name")
      return;
    }
    if(!this.patientForm.noOfBoxes==null||+this.patientForm.noOfBoxes<1)
    {
      alert("Enter the no of boxes greater than 0");
      return;
    }
    
    if(!this.patientForm.unitPerBox==null||+this.patientForm.unitPerBox<1)
    {
      alert("Enter the unit per box greater than  0");
      return;
    }
/*
* add other validations here
*/
    console.log(this.patientForm);
    this.addstockService.insertStock(this.patientForm).then((response)=>{
      console.log(response);
      alert("Stock added successfully");
      this.router.navigate(['dashboard/pharmacist/list-stock']);
      
    });
    
  }
  cancel(){
    this.router.navigate(['dashboard/pharmacist/list-stock']);

  }
  addMed(){
    this.router.navigate(['dashboard/pharmacist/add-medicine']);

  }
 
}
