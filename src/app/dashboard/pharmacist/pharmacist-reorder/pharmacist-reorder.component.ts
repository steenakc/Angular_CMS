import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Addstock } from 'src/app/service/addstock';
import { AddstockService } from 'src/app/service/addstock.service';

@Component({
  selector: 'app-pharmacist-reorder',
  templateUrl: './pharmacist-reorder.component.html',
  styleUrls: ['./pharmacist-reorder.component.scss']
})
export class PharmacistReorderComponent implements OnInit {
  patientForm: any = {
    medicineId: '',
    noOfBoxes: '',
    unitPerBox: '',
    expiryDate: '',
    count: '',
    medicineStockId: '',
    medicine: {
      medicineId: '',
      medicineName: '',
      medicineCompany: {
        companyName: '',
        medicineCompanyId: '',
      },
    }
  };

  med: any[] = []; // Array to store medicine options
  companies: any[] = []; // Array to store company options

  constructor(public addstockService: AddstockService, private router: Router) {}

  ngOnInit(): void {
    this.loadMedicineOptions();
    this.loadCompanyOptions();
  }

  loadMedicineOptions(): void {
    this.addstockService.getMedicineNames().subscribe((response: any[]) => {
      this.med = response;
    });
  }

  loadCompanyOptions(): void {
    this.addstockService.getCompanyNames().subscribe((response: any[]) => {
      this.companies = response;
    });
  }

  submitPatientForm(): void {

    if (
      !this.patientForm.medicineId ||
      !this.patientForm.medicineCompanyId ||
      !this.patientForm.count ||+this.patientForm.count<1
      // !this.patientForm.unitPerBox||+this.patientForm.unitPerBox<1
    ) {
      alert("Please fill in all the fields.");
      return;
    }
    
    // Logic for submitting the form and reordering stock
    alert('Reordered Stock Successfully');
    this.router.navigate(['dashboard/pharmacist/stock']);

  }

  cancel(){
    this.router.navigate(['dashboard/pharmacist/stock']);
  }
}
