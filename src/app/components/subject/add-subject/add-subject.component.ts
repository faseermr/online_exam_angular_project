import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupName,
  Validators,
} from '@angular/forms';
import { Classroom } from 'src/app/models/classroom.model';
import { ClassroomService } from 'src/app/services/class/classroom.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css'],
})
export class AddSubjectComponent implements OnInit {
  classrooms?: Classroom[];
  data: any[] = [];

  constructor(private classroomServices: ClassroomService) {}

  ngOnInit(): void {
    this.getAllClassroom();
  }

  subjectForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    grade: new FormControl('', [Validators.required]),
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
}
