import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService) {}

  student = {
    student: [
      {
        stuid: 0,
        name: '',
        email: '',
        clsid: 0,
      },
    ],
  };
  admin = {
    admin: [
      {
        id: 0,
        name: '',
        email: '',
      },
    ],
  };

  ngOnInit(): void {
    this.admin = this.authService.getAdminData();
    this.student = this.authService.getStudentData();

    console.log(this.student);
  }
}
