import { Component, OnInit } from '@angular/core';
import { Classroom } from 'src/app/models/classroom/classroom.model';
import { ClassroomService } from 'src/app/services/class/classroom.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.css'],
})
export class ClassroomListComponent implements OnInit {
  classrooms?: Classroom[];
  displayedColumns: string[] = ['clsid', 'grade'];
  data: any[] = [];

  // injecting classroom service via class constructor
  constructor(
    private classroomServices: ClassroomService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllClassroom();
  }

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

  editClassroom = (clsid: number) => {
    this.router.navigateByUrl(`/classroom/${clsid}`);
  };

  deleteClassroom = (clsid: number) => {
    let option = window.confirm('Are you want to delete');
    if (option) {
      this.classroomServices.delete(clsid).subscribe({
        next: (res) => {
          alert(res.message);
          this.getAllClassroom();
        },
      });
    }
  };
}
