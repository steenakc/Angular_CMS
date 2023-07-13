import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { error } from 'console';
import { AddtestService } from 'src/app/service/addtest.service';

@Component({
  selector: 'app-lab-test-update',
  templateUrl: './lab-test-update.component.html',
  styleUrls: ['./lab-test-update.component.scss']
})
export class LabTestUpdateComponent implements OnInit {

  testForm:any={
    labTestId:'',
    testName:'',
    highRange:'',
    lowRange:'',
    unit:'',
    testPrice:'',
  }
  labTestId:number;




  constructor(public updatetestService:AddtestService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
   //getting the id passed from the browser URL
   this.labTestId=this.router.snapshot.params['labTestId'];
   this.updatetestService.testListById(this.labTestId).subscribe((data=>{
     console.log(data)
     this.testForm=data;

    //  //Chnaging the Date format 
    //  const datePipe = new DatePipe("en-UK");
    //  const formattedDate: any = datePipe.transform(data.expiryDate, 'yyyy-MM-dd');
    //  this.medicineForm.expiryDate = formattedDate;
     this.testForm=Object.assign({},data);
   }),error=>console.log(error));
  }

  navigateToDash(){
    this.route.navigate(['/dashboard/lab-technician/lab-test-list'])
  }

  submitTestForm(){

    console.log(this.testForm);
    this.updatetestService.insertTest(this.testForm).then((testObj)=>
    {
      alert("test added successfully......")
      let  navigateExtras:NavigationExtras={
        queryParams:{
          "labTestId":testObj.labTestId,
        },

        };
        this.route.navigate(['dashboard/lab-technician/lab-test-list']);
      })
    }
    cancel(){

    }
  }
 
