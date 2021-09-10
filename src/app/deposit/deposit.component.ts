import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'deposit',
  template: `
  <div>
  <button (click)='coins()'>Deposit Coins</button>
  <button (click)='notes()'>Deposit notes</button>
  <p>
  <router-outlet></router-outlet>
  </p>
  </div>
  `,
  styles: [
  ]
})
export class DepositComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
  }

  coins(){
    this.router.navigate(['coins'], {relativeTo:this.route});
  }
notes(){
    this.router.navigate(['notes'], {relativeTo:this.route});
  }

}
