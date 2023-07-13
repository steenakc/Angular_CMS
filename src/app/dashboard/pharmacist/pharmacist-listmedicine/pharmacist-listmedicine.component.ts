import { Component, OnInit } from '@angular/core';
import { AddstockService } from 'src/app/service/addstock.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pharmacist-listmedicine',
  templateUrl: './pharmacist-listmedicine.component.html',
  styleUrls: ['./pharmacist-listmedicine.component.scss']
})
export class PharmacistListmedicineComponent implements OnInit {

  searchTerm: string;
  filteredList: any[];
  medicinelist:AddstockService[]

  constructor(private listmedicine:AddstockService,private router: Router,private activatedrouter:ActivatedRoute) { }

  insertMedicine(){
    this.router.navigate(['dashboard/pharmacist/add-medicine']);

  }

  ngOnInit(): void {
    this.listMedicine();
  }

  listMedicine(){
    this.listmedicine.medicineList().subscribe(
      (result: any[]) => {
        console.warn(result);
        this.medicinelist = result;
        this.filteredList = result;

      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  applyFilter(): void {
    if (!this.searchTerm) {
      this.filteredList = this.medicinelist;
      return;
    }

    this.filteredList = this.medicinelist.filter((item: any) =>
      item.medicine.medicineName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }



  deleteMedicine(medicineId:number){
    console.warn("medicineId",medicineId)
    this.listmedicine.deleteMedicines(medicineId).subscribe((result)=>{
      
      if(result){
        
      }
      alert("Medicine is deleted successfully");
    })
    setTimeout(()=>{
      
    },3000);
  }

  // search(){
  //   this.router.navigate(['dashboard/pharmacist/search']);

  // }
  
  editMedicine(medicineId:number){
    this.router.navigate(['dashboard/pharmacist/edit-medicine', medicineId]);
    
  }
}
