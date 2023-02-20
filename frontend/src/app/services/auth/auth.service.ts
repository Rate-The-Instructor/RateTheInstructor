import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  api = 'https://ratetheinstructor-production.up.railway.app/api'
  endpoint = 'auth';

  // Stuff related to the logged in user



  public userSubject = new BehaviorSubject( this.tokenService.getUserData() || null);

  setUser() {
    const userData = localStorage.getItem('userData');
    this.userSubject.next(JSON.parse(userData!));

  }

  getUser() {
    return this.userSubject.asObservable();
  }

  // Stuff related to the logged in user ENDS


  login(userData: any): Observable<any> {
    return this.http.post(`${this.api}/${this.endpoint}/login`, userData);
  }

  signup(signUpData: any) {
    return this.http.post<any>(
      `${this.api}/${this.endpoint}/signup`,
      signUpData
    );
  }

  logout() {}
  updateUser(id: string, signUpData: any) {
    return this.http.patch<any>(`${this.api}/user/${id}`, signUpData);
  }
}
