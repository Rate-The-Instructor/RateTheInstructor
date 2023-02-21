import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  api = 'https://ratetheinstructor-production.up.railway.app/api';
  endpoint = 'rating'

  constructor(private http: HttpClient) { }


  getAllRatings(){
    this.http.get<any>(`${this.api}/${this.endpoint}`)
  }


  getRatingsById(ratingId: string){
    this.http.get<any>(`${this.api}/${this.endpoint}/${ratingId}`)
  }

  postRating(ratingData:object){
    return this.http.post<any>(`${this.api}/${this.endpoint}`, ratingData)
  }

  deleteRating(ratingId:string){
    return this.http.delete<any>(`${this.api}/${this.endpoint}/${ratingId}`)
  }

  getRatingsByUserId(userId:string){
    return this.http.get<any>(`${this.api}/${this.endpoint}/user/${userId}`)
  }

}
