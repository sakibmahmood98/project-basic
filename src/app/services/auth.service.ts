import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

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
  }

  isLoggedIn() {
    return false;
  }
}
