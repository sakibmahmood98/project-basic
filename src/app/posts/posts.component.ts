import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
   public posts!: any[];

  constructor(private service: PostService) {
   
   }

   ngOnInit() {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response as any;
    }, error => {
      alert('An unexpected error occured.');
      console.log(error);
    });

   }

   createPost(input: HTMLInputElement) {
     let post :any = {title: input.value };
     input.value = '';


    this.service.createPost(post)
    .subscribe(response => {
      post.id = response;
      this.posts.splice(0,0,post);
    
    });
   }

   updatePost(post: any) {
     this.service.updatePost(post)
     .subscribe(response => {
       console.log(response);
     })
   }

   deletePost(post: any) {
     this.service.deletePost(post.id)
    //this.http.put(this.url, JSON.stringify(post));
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1 );
    });
  }
}
