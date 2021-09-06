import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  archives = [
    { year: 2021, month: 9},
    { year: 2021, month: 10},
    { year: 2021, month: 11},
    { year: 2021, month: 12},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
