import { Component, OnInit } from '@angular/core';
import { Classroom } from 'src/app/models/classroom/classroom.model';
import { ClassroomService } from 'src/app/services/class/classroom.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-classroom',
  templateUrl: './edit-classroom.component.html',
  styleUrls: ['./edit-classroom.component.css'],
})
export class EditClassroomComponent implements OnInit {
  id: any;
  data?: Classroom;
  // classroom: Classroom = {
  //   grade: '',
  // };
  constructor(
    private classroomService: ClassroomService,
    private route: ActivatedRoute,
    private route1: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getClassroomById(this.id);
  }

  getClassroomById = (clsid: number) => {
    this.classroomService.getAll().subscribe({
      next: (res: any) => {
        this.data = res.data.find((e: any) => e.clsid === parseInt(this.id));
        //console.log(this.data!.grade);
      },
      error: (e) => console.error(e),
    });
  };

  updateClassroom = () => {
    this.classroomService
      .update(this.data?.clsid, {
        grade: this.data?.grade,
      })
      .subscribe({
        next: (res: any) => {
          alert(res.message);
          this.route1.navigateByUrl('/classroom');
        },
      });
  };
}
