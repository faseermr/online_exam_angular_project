import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:4000';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  constructor(private http: HttpClient) {}

  createQuiz(quiz: any): Observable<any> {
    return this.http.post(`${baseUrl}/question`, quiz);
  }

  getQuestionBySubjectAndStudent(subject: any, student: any): Observable<any> {
    return this.http.get<any[]>(`${baseUrl}/question/${subject}/${student}`);
  }

  answerQuestion(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/answer`, data);
  }

  // getStudentAnswer(student: any): Observable<any> {
  //   return this.http.get<any[]>(`${baseUrl}/answer/student/${student}`);
  // }

  getStudentAnswer(student: any): Observable<any> {
    return this.http.get<any[]>(`${baseUrl}/answer/student/${student}`);
  }

  submitAnswer(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/answer/submit`, data);
  }
}
