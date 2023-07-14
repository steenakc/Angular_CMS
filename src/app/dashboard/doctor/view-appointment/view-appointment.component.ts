import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/app/helper/helper';
import { DoctorListService } from 'src/app/service/doctor-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.scss']
})
export class ViewAppointmentComponent implements OnInit {
  help = new Helper();
  appointmentList: any;
  searchTerm: string;
  filteredList: any[];

  constructor(
    private doctorListService: DoctorListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAppointmentList();
  }

  // Get today's appointment list
  getAppointmentList(): void {
    var a = this.help.getValueFromSessionAndLocal(true, 'userInfo');
    console.log(a.userId);
    this.doctorListService.getPatientAppoinmentList(a.userId).subscribe(
      (patients: any[]) => {
        this.filteredList = patients;
        this.appointmentList = patients;
        console.log(patients);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // Apply search filter
  applyFilter(): void {
    if (!this.searchTerm) {
      this.filteredList = this.appointmentList;
      return;
    }

    this.filteredList = this.appointmentList.filter((item: any) =>
      item.patient.patientName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Navigate to diagnosis page
  goToDiagnosisPage(appointment: any): void {
    this.router.navigate([
      '/dashboard/doctor/diagnosis',
      appointment.appointmentId,
      appointment.patientId,
      appointment.patient.patientName,
      appointment.patient.bloodGroup,
      appointment.patient.age,
      appointment.patient.gender
    ]);
  }
}
