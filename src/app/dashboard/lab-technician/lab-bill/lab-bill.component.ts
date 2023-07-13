import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-bill',
  templateUrl: './lab-bill.component.html',
  styleUrls: ['./lab-bill.component.scss']
})
export class LabBillComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}




// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { AddstockService } from 'src/app/service/addstock.service';

// @Component({
//   selector: 'app-pharmacist-bill',
//   templateUrl: './pharmacist-bill.component.html',
//   styleUrls: ['./pharmacist-bill.component.scss']
// })
// export class PharmacistBillComponent implements OnInit {
  
//   appointmentId:number;
//   medicineprescriptionlist:any
//   medicineprescriptionlist1:any

//   constructor(private listmedicineprescription:AddstockService,private router: Router,private activatedrouter:ActivatedRoute) { }


//   ngOnInit(): void {
//     this.activatedrouter.paramMap.subscribe(params=>{
//       this.appointmentId=Number(params.get('appointmentId'));
//       console.log(this.appointmentId);
//     })
//     this.listmedicineprescription.prescriptionById(this.appointmentId).subscribe(
//       (result: any[]) => {
//         console.warn(result);
//         this.medicineprescriptionlist = result;
//         this.medicineprescriptionlist1= result[0];
//       },
//       (error: any) => {
//         console.log(error);
//       }
//     );
//     console.log("medicineprescriptionlist")
//   }
  
  
//   getTotalPrice(): number {
//     let totalPrice = 0;
//     for (let item of this.medicineprescriptionlist) {
//       totalPrice += item.count * item.medicne.rate;
//     }
//     return totalPrice;
//   }
  

//   cancel(){
//     this.router.navigate(['dashboard/pharmacist/list-medicineprescription']);

//   }



//   getCurrentDate() {
//     const today = new Date();
//     const day = today.getDate().toString().padStart(2, '0');
//     const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
//     const year = today.getFullYear();
//     return `${day}/${month}/${year}`;
//   }

//   disableprescription(medicnePrescriptionId:number){
//     console.warn("medicnePrescriptionId",medicnePrescriptionId)
//     this.listmedicineprescription.deletePrescription(medicnePrescriptionId).subscribe((result)=>{
      
//       if(result){
        
//       }
//       alert("Medicine is deleted successfully");
   
//     })
//     setTimeout(()=>{
      
//     },3000);
//   }

  
  

}
