import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddstockService } from 'src/app/service/addstock.service';

@Component({
  selector: 'app-pharmacist-listmedicineprescription',
  templateUrl: './pharmacist-listmedicineprescription.component.html',
  styleUrls: ['./pharmacist-listmedicineprescription.component.scss']
})
export class PharmacistListmedicineprescriptionComponent implements OnInit {

  appointmentId:number;
  medicineprescriptionlist:AddstockService[];

  constructor(private listmedicineprescription:AddstockService,private router: Router,private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRouter.paramMap.subscribe(params=>{
      this.appointmentId=Number(params.get('appointmentId'));
      console.log(this.appointmentId);
    })
    this.listmedicineprescription.prescriptionById(this.appointmentId).subscribe(
      (result: any[]) => {
        console.warn(result);
        this.medicineprescriptionlist = result;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  billForm(appointmentId:number): void{
    this.router.navigate(['dashboard/pharmacist/bill',appointmentId]);

  }
  cancel(){
    this.router.navigate(['dashboard/pharmacist/list-prescription']);

  }
}
