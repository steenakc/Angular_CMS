import { Component, OnInit } from '@angular/core';
import { AddstockService } from 'src/app/service/addstock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pharmacist-liststock',
  templateUrl: './pharmacist-liststock.component.html',
  styleUrls: ['./pharmacist-liststock.component.scss']
})
export class PharmacistListstockComponent implements OnInit {
  page:number=1;
  searchTerm: string;
  filteredList: any[];

  stocklist:AddstockService[]
 
  
  
  constructor(private liststock:AddstockService,private router: Router) { }

  insertStock(){
    this.router.navigate(['dashboard/pharmacist/add-stock']);
  }

  ngOnInit(): void {
    
    this.listStock();
  }

  listStock(){
    this.liststock.stockList().subscribe((result: any[])=>{
      console.warn(result)   
      this.stocklist=result;
      this.filteredList = result;

    },
    (error: any) => {
      console.log(error);
    }
    )

  }
  
  applyFilter(): void {
    if (!this.searchTerm) {
      this.filteredList = this.stocklist;
      return;
    }

    this.filteredList = this.stocklist.filter((item: any) =>
      item.medicine.medicineName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  
  deleteMedicine(medicineStockId:number){
    console.warn("medicineStockId",medicineStockId)
    this.liststock.deleteStock(medicineStockId).subscribe((result)=>{
      
      if(result){
        
      }
      alert("Medicine is deleted successfully");
      this.listStock();
    })
    setTimeout(()=>{
      
    },3000);
  }

  
  editMedicine(medicineStockId: number): void {
    this.router.navigate(['dashboard/pharmacist/edit-stock', medicineStockId]);
  }
  
  
}
