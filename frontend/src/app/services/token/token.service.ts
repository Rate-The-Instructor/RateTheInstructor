import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setJWTtoken(token:string){
    localStorage.setItem('jwtToken', token);
  }

  getJWTtoken() {
    return localStorage.getItem('jwtToken');
  }

  setUserData(userData: any){
    localStorage.setItem('userData', JSON.stringify(userData))
  }

  getUserData(){
    const userData = localStorage.getItem('userData');

    return JSON.parse(userData!);
  }

  removeTokens(){
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userData');
  }

}
