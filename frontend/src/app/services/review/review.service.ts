import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  
  constructor(private http: HttpClient) { }

  api = 'https://ratetheinstructor-production.up.railway.app/api'
  endpoint = '/rating'

  postRating(rating:any): Observable<any>{
    return this.http.post<any>(`${this.api}/${this.endpoint}`, rating)
  }

  getAllReviews(): Observable<any>{
    return this.http.get<any>(`${this.api}/${this.endpoint}`)
  }

  getRatingsForInstructor(instructorId: string): Observable<any>{
    return this.http.get<any>(`${this.api}/${this.endpoint}/instructor/${instructorId}`)
  }
  
  getRatingById(id:string): Observable<any>{
    return this.http.get<any>(`${this.api}/${this.endpoint}/${id}`)
  }
  
  deleteReview(id: string){
    this.http.delete<any>(`${this.api}/${this.endpoint}/${id}`)
  }

  editReview(instructor: any, id: string){
    this.http.patch<any>(`${this.api}/${this.endpoint}/${id}`, instructor)
  }
  
}
