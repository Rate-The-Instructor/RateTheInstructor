import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}
  private commentUrl =
    'https://ratetheinstructor-production.up.railway.app/api/comments/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  getComments(): Observable<any[]> {
    return this.http.get<any>(this.commentUrl);
  }
  getCommentsById(id: string): Observable<any> {
    const commentIdUrl = `${this.commentUrl}/${id}`;
    return this.http.get<any>(commentIdUrl);
  }
  updateComment(comment: any): Observable<any> {
    return this.http.put<any>(this.commentUrl, comment, this.httpOptions);
  }
  addComment(comment: any): Observable<any> {
    return this.http.post<any>(this.commentUrl, comment, this.httpOptions);
  }
  removeComment(id: string): Observable<any> {
    const commentIdUrl = `${this.commentUrl}/${id}`;
    return this.http.delete<any>(commentIdUrl, this.httpOptions);
  }
}
