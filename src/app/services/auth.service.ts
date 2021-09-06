import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }

  login(credentials: any) {
    return this.http.post('/api/authenticate',
    credentials).subscribe((response: any) => {
     let result  = response;
     console.log(result.token);
     if(result && result.token ) {
       localStorage.setItem('token', result.token);
       return true;

     }
     return false;
    });
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    //return tokenNotExpired();
    let jwtHelper = new JwtHelperService()
    let token= localStorage.getItem('token');

    if(!token)
    return false;

    let expirationDate = jwtHelper.getTokenExpirationDate(token as any);
    let isExpired = jwtHelper.isTokenExpired(token as any);


    return !isExpired;
  }
  
}
