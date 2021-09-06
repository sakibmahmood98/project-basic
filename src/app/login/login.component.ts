import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  invalidLogin!: boolean; 

  constructor(
    private router:Router,
    private authService: AuthService
  ) { }

  

  signIn(credentials: any) {
    let result = this.authService.login(credentials);
      if(result)
      this.router.navigate(['/']);
      else
      this.invalidLogin =true;
   
  }
}
