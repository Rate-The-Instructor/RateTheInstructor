import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  api = 'https://ratetheinstructor-production.up.railway.app/api';
  endpoint = 'rating';

  constructor(private http: HttpClient) {}

  getAllRatings() {
    return this.http.get<any>(`${this.api}/${this.endpoint}`);
  }

  getRatingsById(ratingId: string) {
    console.log(ratingId, 123123123);
    console.log(`${this.api}/${this.endpoint}/${ratingId}`);
    return this.http.get<any>(`${this.api}/${this.endpoint}/${ratingId}`);
  }

  postRating(ratingData: object) {
    return this.http.post<any>(`${this.api}/${this.endpoint}`, ratingData);
  }

  deleteRating(ratingId: string) {
    return this.http.delete<any>(`${this.api}/${this.endpoint}/${ratingId}`);
  }

  getRatingsByUserId(userId: string) {
    return this.http.get<any>(`${this.api}/${this.endpoint}/user/${userId}`);
  }

  updateRating(ratingId: string, newRating: any) {
    return this.http.patch<any>(
      `${this.api}/${this.endpoint}/${ratingId}`,
      newRating
    );
  }
}
