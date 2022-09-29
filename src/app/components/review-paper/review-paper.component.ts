import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question/question.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ExamService } from 'src/app/services/exam/exam.service';

@Component({
  selector: 'app-review-paper',
  templateUrl: './review-paper.component.html',
  styleUrls: ['./review-paper.component.css'],
})
export class ReviewPaperComponent implements OnInit {
  constructor(
    private examService: ExamService,
    private authService: AuthService
  ) {}

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
  questionNo = 1;
  question?: Question[];

  ngOnInit(): void {
    this.student = this.authService.getStudentData();
    this.getStudentAnswer();
  }

  getStudentAnswer = () => {
    console.log(this.student.student[0].stuid);

    this.examService.getStudentAnswer(this.student.student[0].stuid).subscribe({
      next: (res) => {
        this.question = res;
        console.log(res);
      },
    });
  };
}
