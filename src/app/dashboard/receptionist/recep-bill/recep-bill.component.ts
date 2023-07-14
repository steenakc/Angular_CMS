import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceptionistService } from 'src/app/service/receptionist.service';

@Component({
  selector: 'app-recep-bill',
  templateUrl: './recep-bill.component.html',
  styleUrls: ['./recep-bill.component.scss']
})
export class RecepBillComponent implements OnInit {

  constructor(private route: ActivatedRoute,private receptionistService: ReceptionistService,
    private router: Router) { }
billDetails:any=null;
appointmentId:number=0;
  ngOnInit(): void {
  console.log();
  this.appointmentId=+this.route.snapshot.paramMap.get("appointmentId");
  this.getBillDetails();
  }
  getBillDetails() {
    this.receptionistService.getBillDetails(this.appointmentId).then((result) => {
      console.warn(result)
      this.billDetails = result;
    })
  }
  markBillAsPaid()
  {
    this.receptionistService.markBillAsPaid(this.billDetails.data.patient_bill_id).then((result) => {
      console.warn(result)
      this.billDetails = result;
    })
  };

  goToDashBoard()
  {
    this.router.navigate(['/dashboard/receptionist/dashboard']);
  }
  print()
  {
    const printContent = document.getElementById("printContainer");
const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
WindowPrt.document.write(printContent.innerHTML);
WindowPrt.document.close();
WindowPrt.focus();
WindowPrt.print();
WindowPrt.close();
  }
}
