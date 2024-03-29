import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'src/app/models/subject/subject.model';
const baseUrl = 'http://localhost:4000';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${baseUrl}/subject`);
  }

  updateSubjectStatus(sub_status: any, subid: any): Observable<any> {
    return this.http.put<any>(
      `${baseUrl}/subject/update/${sub_status}/${subid}`,
      null
    );
  }

  getSubjectByGrade(grade: any, student: any): Observable<any> {
    return this.http.get<Subject[]>(
      `${baseUrl}/subject/grade/${grade}/${student}`
    );
  }

  addSubject(data: any): Observable<any> {
    return this.http.post<any>(`${baseUrl}/subject`, data);
  }

  updateSubject(subid: any, data: any): Observable<any> {
    return this.http.put<any>(`${baseUrl}/subject/update/${subid}`, data);
  }

  deleteSubject(subid: any): Observable<any> {
    return this.http.delete(`${baseUrl}/subject/${subid}`);
  }
}
