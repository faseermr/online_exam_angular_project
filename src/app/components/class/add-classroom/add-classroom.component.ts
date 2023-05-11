import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Classroom } from 'src/app/models/classroom/classroom.model';
import { ClassroomService } from 'src/app/services/class/classroom.service';

@Component({
  selector: 'app-add-classroom',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.css'],
})
export class AddClassroomComponent implements OnInit {
  classroom: Classroom = {
    grade: '',
  };

  constructor(private classroomService: ClassroomService) {}
  @Input() getAllClassroom: any;

  ngOnInit(): void {}

  saveClassroom(add_class: NgForm) {
    this.classroomService
      .create({
        grade: this.classroom.grade,
      })
      .subscribe({
        next: (res) => {
          alert(res.message);
          //  this.classroom.grade = '';
          this.getAllClassroom();
          add_class.reset();
        },
      });
  }
}
