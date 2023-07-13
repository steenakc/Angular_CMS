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
  companylists: any[];
  filteredList: any[];

  companylist:AddstockService[]

  constructor(private listcompany:AddstockService,private router:Router) { }

  ngOnInit(): void {
    this.listcompany.companyList().subscribe(
      (result: any[]) => {
        console.warn(result);
        this.companylist = result;
      },
      (error: any) => {
        console.log(error);
      }
    );


    this.listcompany.companyList().subscribe(
      (result: any[]) => {
        console.warn(result);
        this.companylists = result;
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
        item.companyName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );

    }
  

  insertCompany(){
    this.router.navigate(['dashboard/pharmacist/add-company']);
  
  }

  deleteCompany(medicneCompanyId:number){
    console.warn("medicneCompanyId",medicneCompanyId)
    this.listcompany.deleteCompany(medicneCompanyId).subscribe((result)=>{
      
      if(result){
        
      }
      alert("Company is deleted successfully");
    })
    setTimeout(()=>{
      
    },3000);
  }

  editCompany(medicneCompanyId:number){
    this.router.navigate(['dashboard/pharmacist/edit-company',medicneCompanyId]);

  }

}
