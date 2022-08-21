import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'online_exam_system';
  isLogging: boolean = false;
  isStudentLogging: boolean = false;
  isAdminLogging: boolean = false;
  test = false;

  ngOnInit() {
    let storeAdminData = localStorage.getItem('admin');
    let storeStudentData = localStorage.getItem('student');

    if (storeAdminData != null) {
      this.isAdminLogging = true;
    } else {
      this.isAdminLogging = false;
    }

    if (storeStudentData != null) {
      this.isStudentLogging = true;
    } else {
      this.isStudentLogging = false;
    }
  }

  logout = () => {
    localStorage.removeItem('student');
    localStorage.removeItem('admin');
    setTimeout(() => {
      window.location.reload();
    }, 50);
  };
}
