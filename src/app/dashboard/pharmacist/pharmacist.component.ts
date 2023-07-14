import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pharmacist',
  templateUrl: './pharmacist.component.html',
  styleUrls: ['./pharmacist.component.scss']
})
export class PharmacistComponent implements OnInit {

  constructor(private route:Router) { 
  }

  ngOnInit(): void {
  }

  stock(){
    this.route.navigate(['dashboard/pharmacist/list-stock']);
    
  }

  prescription(){
    this.route.navigate(['dashboard/pharmacist/list-prescription']);

  }

  restock(){
    this.route.navigate(['dashboard/pharmacist/reorder']);

  }
}
