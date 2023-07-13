import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-paharmacist-stockmanagment',
  templateUrl: './paharmacist-stockmanagment.component.html',
  styleUrls: ['./paharmacist-stockmanagment.component.scss']
})
export class PaharmacistStockmanagmentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  stockMangement(){
    this.router.navigate(['dashboard/pharmacist/list-stock']);

  }

  prescriptionMangement(){
    this.router.navigate(['dashboard/pharmacist/list-prescription']);

  }

}
