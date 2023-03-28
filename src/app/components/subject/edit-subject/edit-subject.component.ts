import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private activeRoute: ActivatedRoute,
    private route: Router
  ) {}

  classrooms?: Classroom[];
  data?: Subject;
  id: any;

  ngOnInit(): void {
    this.getAllClassroom();
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.getSubjectById(this.id);
    //  console.log(this.data);
  }

  subjectForm = new FormGroup({
    name: new FormControl(this.data?.name, [Validators.required]),
    grade: new FormControl(this.data?.clsid, [Validators.required]),
  });

  getAllClassroom = () => {
    this.classroomServices.getAll().subscribe({
      next: (data: any) => {
        this.classrooms = data.data;
        this.data = data.data;
        //  console.log(data.data);
      },
      error: (e) => console.error(e),
    });
  };

  updateSubject = () => {
    //  console.log(this.subjectForm.value);

    this.subjectServices
      .updateSubject(this.id, {
        subject: this.subjectForm.value.name,
        clsid: this.subjectForm.value.grade,
      })
      .subscribe({
        next: (res) => {
          alert(res.message);
          this.route.navigateByUrl('/subject');
        },
      });
  };

  getSubjectById = (subid: number) => {
    this.subjectServices.getAll().subscribe({
      next: (res: any) => {
        // console.log(res);

        this.data = res.find((e: any) => e.subid === parseInt(this.id));
        // console.log(this.data);
        this.subjectForm = new FormGroup({
          name: new FormControl(this.data?.name),
          grade: new FormControl(this.data?.clsid),
        });
      },
      error: (e) => console.error(e),
    });
  };
}
