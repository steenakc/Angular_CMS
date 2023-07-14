import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ReceptionistService } from 'src/app/service/receptionist.service';

@Component({
  selector: 'app-receptionist-dashboard',
  templateUrl: './receptionist-dashboard.component.html',
  styleUrls: ['./receptionist-dashboard.component.scss'],
  providers: [DatePipe]
})
export class ReceptionistDashboardComponent implements OnInit {

  constructor(private datePipe: DatePipe, private recptionistService: ReceptionistService,
    private router: Router
  ) { }
  dateSelected: any = new Date();
  departmentIdSelected: number = 1;
  departments: any[];

  doctorList: any[] = [];

  ngOnInit(): void {
    this.listDepartments();
  }

  listDepartments() {
    this.recptionistService.getDepartments().then((result) => {
      this.departments = result;
      if (this.dateSelected != null && this.departmentIdSelected > 0) {
        this.populateDashboardDetails();
      }
    });
    // }
    // this.listDepartments.getDepartments().then((result) => {
    //   console.warn(result)
    //   this.patientList = result;
    // })
  }

  onDateChange(event: any) {
    console.log(event);
    const selectedDate = event.value;
    const formattedDate = this.datePipe.transform(selectedDate, 'yyyy-MM-dd');
    this.dateSelected = formattedDate;
    console.log(formattedDate); // Output: "2023 07 09" (example date format)

    if (this.dateSelected != null && this.departmentIdSelected > 0) {
      this.populateDashboardDetails();
    }
    // You can store or use the formatted date in your component's logic
  }

  onDepartmentChange() {
    if (this.dateSelected != null && this.departmentIdSelected > 0) {
      this.populateDashboardDetails();
    }
  }

  populateDashboardDetails() {
    this.recptionistService.populateDashboardDetails(this.departmentIdSelected, this.dateSelected).then((response) => {
      console.log(response);
      this.doctorList = response;
    });
  }
  clickOnSlot(slot: any) {
    try {
      if (slot.appointment_id && +slot.appointment_id > 0) {
        let navigationExtras: NavigationExtras = {
          queryParams: {
            "AppointmentId": slot.appointment_id,
            "index": Math.round(Math.random() * 10000),
          },
          skipLocationChange: false
        };
        this.router.navigate(["/dashboard/receptionist/view-appointment"], navigationExtras);
      } else {
        let navigationExtras: NavigationExtras = {
          queryParams: {
            "doctorId": slot.doctor_id,
            "time": slot.time,
            "date": this.dateSelected,
            "departmentId": this.departmentIdSelected,
            "index": Math.round(Math.random() * 10000),
          },
          skipLocationChange: false
        };
        this.router.navigate(["/dashboard/receptionist/list-patient"], navigationExtras);
      }
    } catch (error) {

    }

  }
}
