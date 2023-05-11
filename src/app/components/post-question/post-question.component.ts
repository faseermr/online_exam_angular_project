import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostQuestion } from 'src/app/models/question/question.model';
import { Subject } from 'src/app/models/subject/subject.model';
import { ExamService } from 'src/app/services/exam/exam.service';
import { SubjectService } from 'src/app/services/subject/subject.service';

@Component({
  selector: 'app-post-question',
  templateUrl: './post-question.component.html',
  styleUrls: ['./post-question.component.css'],
})
export class PostQuestionComponent implements OnInit {
  constructor(
    private subjectService: SubjectService,
    private examService: ExamService
  ) {}
  subjectList?: Subject[];
  postQuestion: PostQuestion = {
    subid: 0,
    question: '',
    ans1: '',
    ans2: '',
    ans3: '',
    ans4: '',
    correct_ans: '',
  };

  ngOnInit(): void {
    this.getAllSubject();
  }

  getAllSubject = () => {
    this.subjectService.getAll().subscribe({
      next: (res) => {
        this.subjectList = res;
      },
    });
  };

  postQuiz(data: NgForm) {
    // e.preventDefault();
    console.log(this.postQuestion);
    this.examService
      .createQuiz({
        subject: this.postQuestion.subid,
        qfield: this.postQuestion.question,
        ans1: this.postQuestion.ans1,
        ans2: this.postQuestion.ans2,
        ans3: this.postQuestion.ans3,
        ans4: this.postQuestion.ans4,
        correct_ans: this.postQuestion.correct_ans,
      })
      .subscribe({
        next: (res) => {
          alert(res.message);
          data.reset();
        },
      });
  }
}
