import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Classroom } from 'src/app/models/classroom/classroom.model';
import { Subject } from 'src/app/models/subject/subject.model';
import { ClassroomService } from 'src/app/services/class/classroom.service';
import { SubjectService } from 'src/app/services/subject/subject.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css'],
})
export class EditSubjectComponent implements OnInit {
  constructor(
    private classroomServices: ClassroomService,
    private subjectServices: SubjectService,
    private route: ActivatedRoute
  ) {}

  classrooms?: Classroom[];
  data?: Subject;
  id: any;

  ngOnInit(): void {
    this.getAllClassroom();
    this.id = this.route.snapshot.paramMap.get('id');
    this.getSubjectById(this.id);
    console.log(this.data);
  }

  subjectForm = new FormGroup({
    name: new FormControl(this.data?.name, [Validators.required]),
    grade: new FormControl(this.data?.grade, [Validators.required]),
  });

  getAllClassroom = () => {
    this.classroomServices.getAll().subscribe({
      next: (data: any) => {
        this.classrooms = data.data;
        this.data = data.data;
        console.log(data.data);
      },
      error: (e) => console.error(e),
    });
  };

  getSubjectById = (subid: number) => {
    this.subjectServices.getAll().subscribe({
      next: (res: any) => {
        // console.log(res);

        this.data = res.find((e: any) => e.subid === parseInt(this.id));
        console.log(this.data);
      },
      error: (e) => console.error(e),
    });
  };
}
