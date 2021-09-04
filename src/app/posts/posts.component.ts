import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AppError } from '../common/validators/app-error';
import { BadInput } from '../common/validators/bad-input';
import { NotFoundError } from '../common/validators/not-found-error';
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
    this.service.getAll()
    .subscribe(response => {
      this.posts = response as any;
    }, 
    (error: AppError) => {
      if(error instanceof NotFoundError ){ 
        //alert('--');
      }
        else throw error;
    });
   }

   createPost(input: HTMLInputElement) {
     let post :any = {title: input.value };
     input.value = '';


    this.service.create(post)
    .subscribe(response => {
      post.id = response;
      this.posts.splice(0,0,post);
    
    },
    (error: AppError) => {
      if(error instanceof BadInput ){ 
        //this.form.setErrors(error.originalError);
      }
        else throw error;
    });
   }

   updatePost(post: any) {
     this.service.update(post)
     .subscribe(response => {
       console.log(response);
     },
     (error: AppError) => {
      if(error instanceof NotFoundError ){ 
        //alert('--');
      }
      else throw error;
    });
   }

   deletePost(post: any) {
     this.service.delete(post.id)
    //this.http.put(this.url, JSON.stringify(post));
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    },
    (error: AppError) => {
      if(error instanceof NotFoundError ){ 
        //alert('--');
        alert('This post has already been deleted.');
      }
      else throw error;
    });
  }
}
