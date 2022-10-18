import { Component, OnInit } from '@angular/core';
import { PostQuestion } from 'src/app/models/question/question.model';
import { Subject } from 'src/app/models/subject/subject.model';
import { SubjectService } from 'src/app/services/subject/subject.service';

@Component({
  selector: 'app-post-question',
  templateUrl: './post-question.component.html',
  styleUrls: ['./post-question.component.css'],
})
export class PostQuestionComponent implements OnInit {
  constructor(private subjectService: SubjectService) {}
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

  postQuiz(e: any) {
    e.preventDefault();
    console.log(this.postQuestion);
  }
}
