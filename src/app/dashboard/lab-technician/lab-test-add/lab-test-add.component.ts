import { Component, OnInit } from '@angular/core';
import { AddtestService} from 'src/app/service/addtest.service';
import { NavigationExtras, Router } from '@angular/router';



@Component({
  selector: 'app-lab-test-add',
  templateUrl: './lab-test-add.component.html',
  styleUrls: ['./lab-test-add.component.scss']
})
export class LabTestAddComponent implements OnInit {


  // labTestId: number=0;
  // testName:'';
  // highRange: number=0;
  // lowRange: number=0;
  // unit:'';
  // testPrice: number=0;


  testForm:any={
    labTestId:'',
    testName:'',
    highRange:'',
    lowRange:'',
    unit:'',
    testPrice:'',
  }




  constructor(public addtestService:AddtestService,private router:Router) { }

  ngOnInit(): void {
   
  }

  navigateToDash(){
    this.router.navigate(['/dashboard/lab-technician/lab-home'])
  }


  submitTestForm(){

    console.log(this.testForm);
    this.addtestService.insertTest(this.testForm).then((testObj)=>
    {
      alert("test added successfully......")
      let  navigateExtras:NavigationExtras={
        queryParams:{
          "labTestId":testObj.labTestId,
        },

        };
        this.router.navigate(['/dashboard/lab-technician/lab-test-list'],navigateExtras);
      })
    }
    cancel(){

    }
  }



  


