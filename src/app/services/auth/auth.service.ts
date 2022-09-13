import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:4000';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  isStudentLogging: boolean = false;
  isAdminLogging: boolean = false;

  login(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/login`, data);
  }

  adminLogin(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/admin`, data);
  }

  getRoleData = () => {
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

    return { admin: this.isAdminLogging, student: this.isStudentLogging };
  };

  getAdminData = () => {
    let storeAdminData = JSON.parse(localStorage.getItem('admin') || '""');
    return storeAdminData;
  };

  getStudentData = () => {
    let storeStudentData = JSON.parse(localStorage.getItem('student') || '""');
    return storeStudentData;
  };
}
