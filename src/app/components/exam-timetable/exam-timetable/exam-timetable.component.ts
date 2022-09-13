import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-exam-timetable',
  templateUrl: './exam-timetable.component.html',
  styleUrls: ['./exam-timetable.component.css'],
})
export class ExamTimetableComponent implements OnInit {
  constructor(private authService: AuthService) {}

  roleData = {
    student: true,
    admin: false,
  };

  istrue = true;
  ngOnInit(): void {
    this.roleData = this.authService.getRoleData();
    console.log(this.roleData.student);
  }
}
