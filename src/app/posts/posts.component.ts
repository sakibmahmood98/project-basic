import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {
   public posts!: any[];
   private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    http.get(this.url)
    .subscribe(response => {
      this.posts = response as any;
     
    });
   }

   createPost(input: HTMLInputElement) {
     let post :any = {title: input.value };
     input.value = '';


    this.http.post(this.url,JSON.stringify(post) )
    .subscribe(response => {
      post.id = response;
      this.posts.splice(0,0,post);
    
    });
   }

   updatePost(post: any) {
     this.http.patch(this.url + '/' +post.id, JSON.stringify({isRead:true}))
     //this.http.put(this.url, JSON.stringify(post));
     .subscribe(response => {
       console.log(response);
     })
   }


}
