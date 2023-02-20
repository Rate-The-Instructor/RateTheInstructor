import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  api = 'https://ratetheinstructor-production.up.railway.app/api';
  endpoint = 'courses'

  constructor(private http: HttpClient) { }

  getAllCourses(){
    return this.http.get<any>(`${this.api}/${this.endpoint}`)
  }

  getCourseById(courseId: string){
    return this.http.get<any>(`${this.api}/${this.endpoint}/${courseId}`)
  }

  editCourse(courseId: string, newData: object){
    return this.http.patch<any>(`${this.api}/${this.endpoint}/${courseId}`, newData)
  }

  deleteCourse(courseId: string){
    return this.http.delete<any>(`${this.api}/${this.endpoint}/${courseId}`)
  }

}
