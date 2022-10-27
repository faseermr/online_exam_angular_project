import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'src/app/models/subject/subject.model';
import { SubjectService } from 'src/app/services/subject/subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css'],
})
export class SubjectListComponent implements OnInit {
  constructor(private subjectService: SubjectService, private router: Router) {}

  subject?: Subject[];

  ngOnInit(): void {
    this.getAllSubject();
  }

  getAllSubject = () => {
    this.subjectService.getAll().subscribe({
      next: (res) => {
        this.subject = res;
      },
    });
  };

  editSubject = (subid: number) => {
    this.router.navigateByUrl(`/subject/${subid}`);
  };
}
