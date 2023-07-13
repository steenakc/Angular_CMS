import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { error } from 'console';
import { AddtestService } from 'src/app/service/addtest.service';

@Component({
  selector: 'app-addresult',
  templateUrl: './addresult.component.html',
  styleUrls: ['./addresult.component.scss']
})
export class AddresultComponent implements OnInit {
  testPrescriptionId: number;
  resultForm: any = {
    actualValue: '',
    testPrescriptionId: '',
  }


  constructor(public addresultService: AddtestService, private router: ActivatedRoute, private route: Router) { }


  ngOnInit(): void {
    //getting the id passed from the browser URL

this.router.paramMap.subscribe(params=>{
  this.testPrescriptionId=Number(params.get('testPrescriptionId'));
})

    //this.testPrescriptionId=Number(this.router.snapshot.params['testPrescriptionId']);
    console.log("hi" + this.testPrescriptionId)
    this.addresultService.patientListById(this.testPrescriptionId).subscribe((data => {
      console.log(data)
      this.resultForm = data;

      this.resultForm = Object.assign({}, data);
    }), error => console.log(error));
  }

  navigateToDash() {
    this.route.navigate(['/dashboard/lab-technician/lab-patient-test-result'])
  }

  submitResultForm() {


    this.resultForm.testPrescriptionId = this.testPrescriptionId

    this.addresultService.insertResult(this.resultForm).then((testObj) => {
      alert("test result added successfully......")
      // let navigateExtras: NavigationExtras = {
      //   queryParams: {
      //     "testPrescriptionId": testObj.testPrescriptionId,
      //   },

      // };
      this.route.navigate(['dashboard/lab-technician/lab-patient-test-result']);
    })
  }
  cancel() {

  }
}


