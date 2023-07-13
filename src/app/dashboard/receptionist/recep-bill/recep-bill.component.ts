import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recep-bill',
  templateUrl: './recep-bill.component.html',
  styleUrls: ['./recep-bill.component.scss']
})
export class RecepBillComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  console.log(this.route.snapshot.paramMap.get("appointmentId"));
  }

}
