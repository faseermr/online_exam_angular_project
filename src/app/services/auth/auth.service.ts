import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:4000';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/login`, data);
  }

  adminLogin(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/admin`, data);
  }
}
