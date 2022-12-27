import { Component, OnInit } from '@angular/core';
import { ExamService } from 'src/app/services/exam/exam.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Question } from 'src/app/models/question/question.model';
import { Student } from 'src/app/models/student/student.model';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-question-paper',
  templateUrl: './question-paper.component.html',
  styleUrls: ['./question-paper.component.css'],
})
export class QuestionPaperComponent implements OnInit {
  constructor(
    private examService: ExamService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  questionForm = new FormGroup({
    answerField: new FormControl('11'),
  });

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
  //  student:Student ={
  //     student: [
  //       {
  //         stuid: 0,
  //         name: '',
  //         email: '',
  //         clsid: 0,
  //       },
  //     ],
  //   };

  subject_id = 0;

  // question = [
  //   {
  //     ans: '',
  //     ans1: '',
  //     ans2: '',
  //     ans3: '',
  //     ans4: '',
  //     ansid: 0,
  //     correct_ans: '',
  //     qfield: '',
  //     qid: 0,
  //     qu: '',
  //     stuid: 0,
  //     subid: 0,
  //   },
  // ];

  question?: Question[];
  indexFirst = 0;
  indexLast = 1;
  questionNo = 1;
  answer = '';

  nextButton = (qid: any) => {
    this.indexFirst += 1;
    this.indexLast += 1;
    this.questionNo += 1;
    this.answerQuestion(qid);
  };

  prevButton = (qid: any) => {
    this.indexFirst -= 1;
    this.indexLast -= 1;
    this.questionNo -= 1;
    this.answerQuestion(qid);
  };

  ngOnInit(): void {
    this.subject_id = this.activatedRoute.snapshot.params['subid'];
    this.student = this.authService.getStudentData();
    this.getQuestionBySubjectAndStudent();
  }

  getQuestionBySubjectAndStudent = () => {
    this.examService
      .getQuestionBySubjectAndStudent(
        this.subject_id,
        this.student.student[0].stuid
      )
      .subscribe({
        next: (res) => {
          this.question = res.data;
          //console.log(res.data);
          //  console.log(this.answer);
        },
      });
  };

  submitAllAnswer = (subject: any) => {
    let option = window.confirm('Are you sure');
    if (option) {
      this.examService
        .submitAnswer({
          student: this.student.student[0].stuid,
          subject: subject,
        })
        .subscribe({
          next: (res) => {
            alert('Successfully submitted');
            this.router.navigateByUrl(`/exam`);
          },
        });
    }
  };

  setAnswer = (event: any) => {
    this.answer = event.target.value;
  };
  answerQuestion = (qid: any) => {
    console.log({
      qid: qid,
      stuid: this.student.student[0].stuid,
      ans: this.answer,
    });

    if (this.answer != '') {
      this.examService
        .answerQuestion({
          qid: qid,
          stuid: this.student.student[0].stuid,
          ans: this.answer,
        })
        .subscribe({
          next: (res) => {
            this.answer = '';
          },
        });
    }
  };
}
