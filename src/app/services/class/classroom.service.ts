import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classroom } from '../../models/classroom.model';
const baseUrl = 'http://localhost:4000';

@Injectable({
  providedIn: 'root',
})
export class ClassroomService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(`${baseUrl}/classroom`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/classroom`, data);
  }

  getById(clsid: number): Observable<Classroom> {
    return this.http.get<Classroom>(`${baseUrl}/classroom/${clsid}`);
  }

  update(clsid: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/classroom/update/${clsid}`, data);
  }

  delete(clsid: any): Observable<any> {
    return this.http.delete(`${baseUrl}/classroom/${clsid}`);
  }
}
