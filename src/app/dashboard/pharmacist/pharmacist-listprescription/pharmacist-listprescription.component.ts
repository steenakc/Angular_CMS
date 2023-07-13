import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddstockService } from 'src/app/service/addstock.service';

@Component({
  selector: 'app-pharmacist-listprescription',
  templateUrl: './pharmacist-listprescription.component.html',
  styleUrls: ['./pharmacist-listprescription.component.scss']
})
export class PharmacistListprescriptionComponent implements OnInit {

 

  prescriptionlist:AddstockService[]

  constructor(private listprescription:AddstockService,private router: Router) { }

  ngOnInit(): void {
    this.listprescription.prescriptionlist().subscribe(
      (result: any[]) => {
        console.warn(result);
        this.prescriptionlist = result;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  prescribeMedicine(appointmentId:number): void {
    this.router.navigate(['dashboard/pharmacist/list-medicineprescription',appointmentId]);
  }


}