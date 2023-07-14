import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddstockService } from 'src/app/service/addstock.service';

@Component({
  selector: 'app-pharmacist-listcompany',
  templateUrl: './pharmacist-listcompany.component.html',
  styleUrls: ['./pharmacist-listcompany.component.scss']
})
export class PharmacistListcompanyComponent implements OnInit {

  searchTerm: string;
  companylist: any[];
  filteredList: any[];

  constructor(private listcompany: AddstockService, private router: Router) { }

  ngOnInit(): void {
    this.medicinecompanyList();
  }

medicinecompanyList(){
  this.listcompany.companyList().subscribe(
    (result: any[]) => {
      console.log(result);
      this.companylist = result;
      this.filteredList = result;
    },
    (error: any) => {
      console.log(error);
    }
  );
}

  applyFilter(): void {
    if (!this.searchTerm) {
      this.filteredList = this.companylist;
      return;
    }
  
    this.filteredList = this.companylist.filter((item: any) =>
      item.companyName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.companyAddress.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  insertCompany(): void {
    this.router.navigate(['dashboard/pharmacist/add-company']);
  }

  deleteCompany(medicneCompanyId: number): void {
    console.log("medicneCompanyId", medicneCompanyId);
    this.listcompany.deleteCompany(medicneCompanyId).subscribe((result) => {
      if (result) {
        // Perform any necessary action on successful deletion
      }
      alert("Company is deleted successfully");
      this.medicinecompanyList();
    });    
  }
    
  medicinesLists(){
    this.router.navigate(['dashboard/pharmacist/list-medicine']);
  }

  editCompany(medicneCompanyId: number): void {
    this.router.navigate(['dashboard/pharmacist/edit-company', medicneCompanyId]);
  }
}
