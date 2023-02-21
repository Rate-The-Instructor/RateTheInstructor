import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Commentervice {
  constructor(private http: HttpClient) {}

  commentUrl =
    'https://ratetheinstructor-production.up.railway.app/api/comment';

  getComments() {
    return this.http.get<any>(this.commentUrl);
  }
  getCommentsById(id: number): Observable<any> {
    const CommentIdUrl = `${this.commentUrl}/${id}`;
    return this.http.get<any>(CommentIdUrl);
  }
  updateComment(commentId: string, comment: any): Observable<any> {
    console.log(comment);
    return this.http.patch<any>(`${this.commentUrl}/${commentId}`, comment);
  }
  postComment(comment: any): Observable<any> {
    return this.http.post<any>(this.commentUrl, comment);
  }
  deleteComment(id: number): Observable<any> {
    const commentUrl = `${this.commentUrl}/${id}`;
    return this.http.delete<any>(commentUrl);
  }
}
