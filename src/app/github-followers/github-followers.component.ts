import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from '../services/github-followers.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers!: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {

    });
    //this.route.paramMap.subscribe();
    //let id= this.route.snapshot.paramMap.get('id');

    this.route.paramMap.subscribe( params => {
      
    });
    //this.route.paramMap.subscribe();
    //let page= this.route.snapshot.paramMap.get('page');

    this.service.getAll()
    .subscribe(followers => this.followers = followers as any);
  }

}
