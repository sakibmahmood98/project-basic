
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private router: Router) { }

  Submit() {
    this.router.navigate(['/followers'], {
      queryParams: {page: 1, order: 'newest'}
    });
  }

  ngOnInit(): void {

  //  this.route.paramMap['username']

    // this.route.paramMap
    // .subscribe(params => {
    //   let id = params.get('username');
    //   console.log(id);
    // });

    

    // let user_id = this.route.snapshot.paramMap.get('username');
    // console.log(user_id);


  }
}
