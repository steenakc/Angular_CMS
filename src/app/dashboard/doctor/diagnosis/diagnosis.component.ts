import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { DoctorListService } from 'src/app/service/doctor-list.service'

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent implements OnInit {
  showReport: boolean = false;
  patientName:any;
  bloodGroup:any;
  age:any;
  gender:any;

  patientListForBooking: any = {
    // patientName: this.patientName,
    // bloodGroup: this.bloodGroup,
    // age: this.age,
    // gender: this.gender
  };

  showDiagnoses: boolean = true;
  testPrescriptionId:number;
  patientId: number;
  appointmentId: number;
  diagnosisList: any;
  testPrescriptionList: any;
  reportList:any;
  diagnosisText: string = '';
  patient:any;

  diagnosisForm:any={
    diagnosis:'',
    appointmentId:'',
    patientId:'',
    
  }
  
  constructor(private route: ActivatedRoute, private doctorListService: DoctorListService,private router:Router) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      this.appointmentId = Number(params.get('appointmentId'));
      this.patientId = Number(params.get('patientId'));
      
      this.patientName=params.get('patientName');
      this.bloodGroup=params.get('bloodGroup');
      this.age=params.get('age');
      this.gender=params.get('gender');

      console.log('Appointment ID:', this.appointmentId);
      console.log('patient ID:', this.patientId);
      this.getDiagnosisHistory1();
      this.viewReport();
      this.patientListForBooking= {
        patientName: this.patientName,
        bloodGroup: this.bloodGroup,
        age: this.age,
        gender: this.gender
      };
    });
  }
 

  //list Diagnosis history
  getDiagnosisHistory1() {
      this.doctorListService.getDiagnosisHistory(this.patientId).subscribe(
        (diagnoses: any[]) => {
          this.diagnosisList = diagnoses;
          console.log("Diagnosis-"+diagnoses);
        },
        (error) => {
          console.error(error);
        }
      );
      //this.showDiagnoses = !this.showDiagnoses;
  }

  //save diagnosis
  saveDiagnosis() {
    if (this.diagnosisForm.diagnosis.trim() === '') {
      alert("Enter Diagnosis");
      return;
    }
  
    this.diagnosisForm.appointmentId = this.appointmentId;
    this.diagnosisForm.patientId = this.patientId;
    console.log(this.diagnosisForm);
  
    this.doctorListService.insertDiagnosis(this.diagnosisForm).then((response) => {
      alert("Data added successfully");
    });

  }
  

  //view report
  viewReport(){
    this.doctorListService.getTestPrescription(this.patientId).subscribe(
      
      (report: any[]) => {
        // console.log("patient"+this.patientId)
        this.reportList = report;
        console.log("report-"+report);
      },
      (error) => {
        console.error(error);
      }
    );

  }

  getReport(testPrescriptionId){
    this.doctorListService.getTestPrescriptionReport(testPrescriptionId).subscribe(
      (list: any[]) => {
        this.testPrescriptionList = list;
        console.log("asdfg"+list);
      },
      (error) => {
        console.error(error);
      }
    );
    this.showReport = !this.showReport;
  }
  Next(){
    this.diagnosisForm.appointmentId = this.appointmentId;
    this.diagnosisForm.patientId = this.patientId;
    this.router.navigate(['dashboard/doctor/doctor-prescription',this.diagnosisForm.appointmentId,this.diagnosisForm.patientId]);

  }
}


