import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { AddstockService} from 'src/app/service/addstock.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Addstock } from 'src/app/service/addstock';

@Component({
  selector: 'app-pharmacist-addstock',
  templateUrl: './pharmacist-addstock.component.html',
  styleUrls: ['./pharmacist-addstock.component.scss']
})
export class PharmacistAddstockComponent implements OnInit {
  today: string;
  
  stocks:Addstock[];
  formData:Addstock=new Addstock();

  constructor(public addstockService:AddstockService,private router:Router,private toastr:ToastrService) { 
    this.today = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');

  }
  ngOnInit(): void {
  }
  //add or edit?
  onSubmit(form:NgForm){
    let addId=this.formData.medicineStockId;
    if(addId==0||addId==null){
      console.log(form.value);
      this.InsertRecord(form);
    }
    else{
      this.updateRecord(form);

    }
  }
  
   //Insert
   InsertRecord(form:NgForm)
   {
     console.log("inserting")
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
   }
 
   updateRecord(form:NgForm){
    //  console.log("Updating")
    //  this.addstockService.UpdateStock(form.value).subscribe(
    //    (result=>{
    //      console.log(result);
    //      this.resetForm(form);
    //      alert("Succesfully Updated")
    //      this.router.navigate(['stock-list'])
    //    })
    //  )
      }

       //Reset Form
resetForm(form:NgForm){
  if(form!=null)
  {
    form.resetForm()
  }
}
}
