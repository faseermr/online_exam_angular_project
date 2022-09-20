import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/subject/subject.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SubjectService } from 'src/app/services/subject/subject.service';

@Component({
  selector: 'app-exam-timetable',
  templateUrl: './exam-timetable.component.html',
  styleUrls: ['./exam-timetable.component.css'],
})
export class ExamTimetableComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private subjectService: SubjectService
  ) {}

  roleData = {
    student: false,
    admin: false,
  };

  subjectList: Subject[] = [];
  subjectListByGrade: Subject[] = [];
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

  getAllSubject = () => {
    this.subjectService.getAll().subscribe({
      next: (res) => {
        this.subjectList = res;
      },
    });
  };

  getSubjectByGrade = () => {
    this.subjectService
      .getSubjectByGrade(
        this.student.student[0].clsid,
        this.student.student[0].stuid
      )
      .subscribe({
        next: (res) => {
          //console.log(res);

          this.subjectListByGrade = res;
        },
      });
  };

  updateSubjectStatus = (sub_status: any, subid: any) => {
    this.subjectService.updateSubjectStatus(sub_status, subid).subscribe({
      next: (res) => {
        this.getAllSubject();
      },
    });
  };

  ngOnInit(): void {
    this.roleData = this.authService.getRoleData();
    this.getAllSubject();
    this.student = this.authService.getStudentData();
    this.getSubjectByGrade();
  }
}
