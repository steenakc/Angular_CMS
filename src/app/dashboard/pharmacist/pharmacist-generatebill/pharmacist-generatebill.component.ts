import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddstockService } from 'src/app/service/addstock.service';

@Component({
  selector: 'app-pharmacist-generatebill',
  templateUrl: './pharmacist-generatebill.component.html',
  styleUrls: ['./pharmacist-generatebill.component.scss']
})
export class PharmacistGeneratebillComponent implements OnInit {

  medicineprescriptionlist:AddstockService[]

  constructor(private listmedicineprescription:AddstockService,private router: Router) { }

  ngOnInit(): void {
    this.listmedicineprescription.prescriptionlist().subscribe(
      (result: any[]) => {
        console.warn(result);
        this.medicineprescriptionlist = result;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  cancel(){
    this.router.navigate(['dashboard/pharmacist/generate-bill']);

  }
}
