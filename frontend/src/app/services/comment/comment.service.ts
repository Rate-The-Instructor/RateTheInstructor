import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { InstructorInterface } from 'src/app/Interfaces/instructorGet';

@Injectable({
  providedIn: 'root',
})
export class InstructorService {
  constructor(private http: HttpClient) {}
  private instructorUrl =
    'https://ratetheinstructor-production.up.railway.app/api/instructors/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  getInstructors(): Observable<InstructorInterface[]> {
    return this.http.get<any>(this.instructorUrl);
  }
  getInstructorsById(id: number): Observable<any> {
    const instructorIdUrl = `${this.instructorUrl}/${id}`;
    return this.http.get<any>(instructorIdUrl);
  }
  updateInstructor(instructor: any): Observable<any> {
    return this.http.put<any>(this.instructorUrl, instructor, this.httpOptions);
  }
  addInstructor(instructor: any): Observable<any> {
    return this.http.post<any>(
      this.instructorUrl,
      instructor,
      this.httpOptions
    );
  }
  removeInstructor(id: number): Observable<any> {
    const instructorIdUrl = `${this.instructorUrl}/${id}`;
    return this.http.delete<any>(instructorIdUrl, this.httpOptions);
  }
}
