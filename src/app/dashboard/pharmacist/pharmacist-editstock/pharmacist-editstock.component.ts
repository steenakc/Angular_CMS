import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddstockService } from 'src/app/service/addstock.service';

@Component({
  selector: 'app-pharmacist-editstock',
  templateUrl: './pharmacist-editstock.component.html',
  styleUrls: ['./pharmacist-editstock.component.scss']
})
export class PharmacistEditstockComponent implements OnInit {

  today: string;
  
  patientForm:{
    medicineId:'',
    noOfBoxes:'',
    unitPerBox:'',
    expiryDate:Date,
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
  
  medicineStockId:number;


  constructor(private route:ActivatedRoute,public addstockService:AddstockService,private router:Router) { 
    this.today = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  }

  ngOnInit(): void {
    this.listStock();

    //getting the id passed from the browser URL
    this.medicineStockId=this.route.snapshot.params['medicineStockId'];
    this.addstockService.getStock(this.medicineStockId).subscribe((data=>{
      console.log(data)
      this.patientForm=data;

      //Chnaging the Date format 
      const datePipe = new DatePipe("en-UK");
      const formattedDate: any = datePipe.transform(data.expiryDate, 'yyyy-MM-dd');
      this.patientForm.expiryDate = formattedDate;
      this.patientForm=Object.assign({},data);
    }),error=>console.log(error));

  }
  listStock(){
    this.addstockService.getMedicineNames().subscribe((response) => {
      this.med = response;
    });
  }
  
  submitPatientForm(){
    // if (this.patientForm.medicineId == null) {
    //   alert("Enter a valid name");
    //   return;
    // }
    
    if(!this.patientForm.noOfBoxes==null||+this.patientForm.noOfBoxes<1)
    {
      alert("Enter the no of boxes greater than or equal to 0");
      return;
    }
    if(!this.patientForm.medicineId){
      alert("Enter Medicine Name")
      return;
    }
    if(!this.patientForm.unitPerBox==null||+this.patientForm.unitPerBox<1)
    {
      alert("Enter the unit per box greater than or equal to 0");
      return;
    }
/*
* add other validations here
*/
    console.log(this.patientForm);
    this.addstockService.insertStock(this.patientForm).then((response)=>{
      console.log(response);
      alert("Stock updated successfully");
      this.router.navigate(['dashboard/pharmacist/list-stock']);
    });
    
  }
  cancel(){
    this.router.navigate(['dashboard/pharmacist/list-stock']);

  }

}
