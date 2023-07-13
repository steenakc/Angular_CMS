import { Component, OnInit } from '@angular/core';
import { AddtestService } from 'src/app/service/addtest.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lab-test-list',
  templateUrl: './lab-test-list.component.html',
  styleUrls: ['./lab-test-list.component.scss']
})
export class LabTestListComponent implements OnInit {

  

  testlist:AddtestService[]
  
  constructor(private listtest:AddtestService,private router: Router) { }

  insertTest(){
    this.router.navigate(['/dashboard/lab-technician/lab-test-add']);
  }

  clickUpdate(labTestId:number){
    this.router.navigate(['/dashboard/lab-technician/lab-test-update',labTestId]);
  }

  deleteTest(labTestId:number){
    console.warn("labTestId",labTestId)
    this.listtest.deleteTest(labTestId).subscribe((result)=>{
      
      if(result){
        
      }
      alert("Test is disabled successfully");
    })
    setTimeout(()=>{
      
    },3000);
  }

  ngOnInit(): void {
    this.listtest.testList().subscribe((result)=>{
      console.warn(result)
      this.testlist=result;
    })

  }

  
}