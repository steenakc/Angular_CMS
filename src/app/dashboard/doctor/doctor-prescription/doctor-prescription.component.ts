import { Component, OnInit } from '@angular/core';
import { DoctorListService } from 'src/app/service/doctor-list.service'
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-doctor-prescription',
  templateUrl: './doctor-prescription.component.html',
  styleUrls: ['./doctor-prescription.component.scss'],





})
export class DoctorPrescriptionComponent implements OnInit {
  showMedicinePrescription: boolean = false;
  showTestPrescription: boolean = false;
  medicineControl = new FormControl();
  testControl = new FormControl();
  medicinePrescriptionList: any;
  testPrescriptionList: any;
  medicinePrescriptionAppointmentList: any;
  testPrescriptionAppointmentList: any;
  patientId: number;
  appointmentId: number;
  medicnePrescriptionId: number;
  testPrescriptionId: number;
  medicinePrescriptionForm: any = {
    dosageId: '',
    medicineId: '',
    noOfDays: '',
  }
  testPrescriptionForm: any = {
    testTestId: '',
  }
  tes: any = {
    testName: '',
    labTestId: '',
  }
  dos: any = {
    dosageStatus: '',
    dosageId: '',
  }
  med: any = {
    medicineName: '',
    medicineId: '',
  }

  constructor(private doctorListService: DoctorListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.ListMedicine();
    this.ListDosage();
    this.ListTest();







    this.route.paramMap.subscribe(params => {
      this.appointmentId = Number(params.get('appointmentId'));
      this.patientId = Number(params.get('patientId'));
      console.log('Appointment ID:', this.appointmentId);
      console.log('patient ID:', this.patientId);
    });
  }

  // list dosage
  ListDosage() {
    this.doctorListService.getDosage().subscribe(
      (response: any[]) => {

        this.dos = response;

        console.log("medicinelist:" + response)
      },
      (error: any) => {
        console.log(error);
      }
    );

  }
  //list medicine
  ListMedicine() {
    this.doctorListService.getMedicineList().subscribe(
      (response: any) => {
        this.med = response;
        console.log("medicinelist:" + this.med)
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  //list medicine prescription history
  getMedicinePrescription() {

    this.doctorListService.getMedicinePrescription(this.patientId).subscribe(
      (list: any[]) => {
        this.medicinePrescriptionList = list;
        console.log("list-" + list);
      },
      (error) => {
        console.error(error);
      }
    );
    this.showMedicinePrescription = !this.showMedicinePrescription;
  }

  //save medicine prescription
  submitMedicine() {

    if (!this.medicinePrescriptionForm.medicineId) {
      alert("Enter Medicine");
      return;
    }
    if (!this.medicinePrescriptionForm.dosageId) {
      alert("Enter Dosage");
      return;
    }
    if (this.medicinePrescriptionForm.noOfDays === null || this.medicinePrescriptionForm.noOfDays <= 0) {
      alert("Enter the number of days greater than 0");
      return;
    }

    this.medicinePrescriptionForm.appointmentId = this.appointmentId;
    this.medicinePrescriptionForm.patientId = this.patientId;
    console.log(this.medicinePrescriptionForm);

    this.doctorListService.insertMedicinePrescription(this.medicinePrescriptionForm).then((response) => {
      console.log("added prescription-" + response);
      this.getMedicinePrescriptionAppoinmtment()
      this.router.navigate(['dashboard/doctor/doctor-prescription', this.medicinePrescriptionForm.appointmentId, this.medicinePrescriptionForm.patientId]);
    });
  }

  //list current medicine prescriptionaccordinfg to appointmtnt id
  getMedicinePrescriptionAppoinmtment() {
    this.doctorListService.getMedicinePrescriptionAppoinmtment(this.appointmentId).subscribe(
      (list: any[]) => {
        this.medicinePrescriptionAppointmentList = list;
        console.log("list-" + list);
      },
      (error) => {
        console.error(error);
      }
    );

  }

  deleteMedicinePrescription(medicnePrescriptionId: number) {
    console.warn("appointmentId", medicnePrescriptionId)
    this.doctorListService.deleteMedicinePrescription(medicnePrescriptionId).subscribe((result) => {
      if (result) {
      }
      alert("deleted");
      this.getMedicinePrescriptionAppoinmtment()
    });
  }
  //+=========================================LABORATORY============================================



  //list test
  ListTest() {
    this.doctorListService.getTestList().subscribe(
      (response: any[]) => {

        this.tes = response;

        console.log("Labtestlist:" + response)
      },
      (error: any) => {
        console.log(error);
      }
    );
  }





  //list LAB prescription history
  getTestPrescription() {

    this.doctorListService.getTestPrescription(this.patientId).subscribe(
      (list: any[]) => {
        this.testPrescriptionList = list;
        console.log("list-testprescriptionhistory" + list);
      },
      (error) => {
        console.error(error);
      }
    );
    this.showTestPrescription = !this.showTestPrescription;
  }

  //save lab prescription
  submitTest() {
    
    
    if(!this.testPrescriptionForm.labTestId){
      alert("Enter Test")
      return;
    }
    

    this.testPrescriptionForm.appointmentId = this.appointmentId;
    this.testPrescriptionForm.patientId = this.patientId;
    console.log(this.testPrescriptionForm);

    this.doctorListService.insertTestPrescription(this.testPrescriptionForm).then((response) => {
      console.log("added todays test prescription-" + response);
      this.getTestPrescriptionAppoinmtment()
      this.router.navigate(['dashboard/doctor/doctor-prescription', this.testPrescriptionForm.appointmentId, this.testPrescriptionForm.patientId]);
    });
  }

  //list current lab prescriptionaccordinfg to appointmtnt id
  getTestPrescriptionAppoinmtment() {

    this.doctorListService.getTestPrescriptionAppoinmtment(this.appointmentId).subscribe(
      (list: any[]) => {
        this.testPrescriptionAppointmentList = list;
        console.log("list-current test" + list);
      },
      (error) => {
        console.error(error);
      }
    );

  }

  deleteTestPrescription(testPrescriptionId: number) {
    console.warn("", testPrescriptionId)
    this.doctorListService.deleteTestPrescription(testPrescriptionId).subscribe((result) => {
      if (result) {
      }
      alert("deleted");
      this.getTestPrescriptionAppoinmtment()
    });
  }
  //next patient
  NextPatient() {
    console.warn("appointmentId", this.appointmentId)
    this.doctorListService.nextPatient(this.appointmentId).subscribe((result) => {
      if (result) {
      }
      alert("bn");
      this.router.navigate(['dashboard/doctor/view-appointment'])
    });
  }
}

