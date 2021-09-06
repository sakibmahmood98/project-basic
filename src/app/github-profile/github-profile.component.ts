
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

  //  this.route.paramMap['username']

    // this.route.paramMap
    // .subscribe(params => {
    //   let id = params.get('username');
    //   console.log(id);
    // });

    let user_id = this.route.snapshot.paramMap.get('username');
    console.log(user_id);


  }
}
