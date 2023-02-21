import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private http: HttpClient) {}
  private departmentUrl =
    'https://ratetheinstructor-production.up.railway.app/api/department/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  getDepartment(): Observable<any> {
    return this.http.get<any>(this.departmentUrl);
  }
  getDepartmentById(id: string): Observable<any> {
    const departmentIdUrl = `${this.departmentUrl}/${id}`;
    return this.http.get<any>(departmentIdUrl);
  }
  updateDepartment(id: string, department: any): Observable<any> {
    const departmentIdUrl = `${this.departmentUrl}/${id}`;
    return this.http.patch<any>(departmentIdUrl, department, this.httpOptions);
  }
  addDepartment(department: any): Observable<any> {
    return this.http.post<any>(
      this.departmentUrl,
      department,
      this.httpOptions
    );
  }
  removeDepartment(id: number): Observable<any> {
    const departmentIdUrl = `${this.departmentUrl}/${id}`;
    return this.http.delete<any>(departmentIdUrl, this.httpOptions);
  }
}
