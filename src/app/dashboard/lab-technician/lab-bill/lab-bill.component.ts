import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddtestService } from 'src/app/service/addtest.service';

@Component({
  selector: 'app-lab-bill',
  templateUrl: './lab-bill.component.html',
  styleUrls: ['./lab-bill.component.scss']
})
export class LabBillComponent implements OnInit {
appointmentId:number;
listprescribe1:any;
listprescribe2:any
  constructor(private testprescribelist:AddtestService,private router:Router,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedroute.paramMap.subscribe(params=>{
      this.appointmentId=Number(params.get('appointmentId'));
      console.log(this.appointmentId);
    })
    this.testprescribelist.prescriptionById(this.appointmentId).subscribe(
      (result: any[]) => {
        console.warn(result);
        this.listprescribe1 = result;
        this.listprescribe2= result[0];
      },
      (error: any) => {
        console.log(error);
      }
    );
    console.log("testprescribelist")
  }

  getCurrentDate() {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    for (let item of this.listprescribe1) {
      totalPrice += item.labTest.testPrice;
    }
    return totalPrice;
  }
}




