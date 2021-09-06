import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // archives = [
  //   { year: 2021, month: 9},
  //   { year: 2021, month: 10},
  //   { year: 2021, month: 11},
  //   { year: 2021, month: 12},

  // ]

  constructor(public authService: AuthService) { }

}
