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
    name:'',
    age:'',
    gender:null,
    bloodgroup:null,
    expiryDate:'2023-12-31'
  }
  
  stocks:Addstock[];
  formData:Addstock=new Addstock();

  constructor(public addstockService:AddstockService,private router:Router) { 
    this.today = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');

  }
  ngOnInit(): void {
  }
  
  
  submitPatientForm(){
    if(this.patientForm.name==null||this.patientForm.name.length<3)
    {
      alert("enter a vald name");
      return;
    }
    if(this.patientForm.age==null||+this.patientForm.age<1)
    {
      alert("enter a vald age");
      return;
    }
/*
* add other validations here
*/
    console.log(this.patientForm);
    this.addstockService.insertStock(this.patientForm).then((response)=>{
      console.log(response);
      alert("data added successfully");
    });
  }
  cancel(){
    
  }

  //add or edit?
  // onSubmit(form:NgForm){
  //   let addId=this.formData.medicineStockId;
  //   if(addId==0||addId==null){
  //     console.log(form.value);
  //     this.InsertRecord(form);
  //   }
  //   else{
  //     this.updateRecord(form);

  //   }
  // }
  
   //Insert
  //  InsertRecord(form:NgForm)
  //  {
  //    console.log("inserting")
    // //  this.addstockService.insertStock(form.value).subscribe
    // //  (
    // //    (result)=>{
    // //      console.log(result);
    // //      this.resetForm(form);
    // //      this.toastr.success('Added Successfully');
    // //      this.router.navigate(['emp-list']);
 
    // //     //alert("Successfully added");
 
    //    }
    //  )
  //  }
 
  //  updateRecord(form:NgForm){
    //  console.log("Updating")
    //  this.addstockService.UpdateStock(form.value).subscribe(
    //    (result=>{
    //      console.log(result);
    //      this.resetForm(form);
    //      alert("Succesfully Updated")
    //      this.router.navigate(['stock-list'])
    //    })
    //  )
      // }

       //Reset Form
// resetForm(form:NgForm){
//   if(form!=null)
//   {
//     form.resetForm()
//   }
// }
}
