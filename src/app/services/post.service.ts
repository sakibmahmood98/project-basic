import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Observable  } from 'rxjs';
import { AppError } from '../common/validators/app-error';
import { NotFoundError } from '../common/validators/not-found-error';
import { BadInput } from '../common/validators/bad-input';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url)
    .pipe(catchError((error: Response) => {
      if(error.status === 404 )
          return Observable.throw(new NotFoundError(error));
        return Observable.throw(new AppError(error));
    
    }));
  }

  createPost(post: any) {
    return this.http.post(this.url,JSON.stringify(post))
    .pipe(catchError((error: Response) => {
      if(error.status === 404 )
          return Observable.throw(new BadInput(error));
        return Observable.throw(new AppError(error));
    
    }));
  }

  updatePost(post: any) {
    return this.http.patch(this.url + '/' +post.id, JSON.stringify({isRead:true}))
    .pipe(catchError((error: Response) => {
      if(error.status === 404 )
          return Observable.throw(new NotFoundError(error));
        return Observable.throw(new AppError(error));
    
    }));

  }

  deletePost(id: any) {
    return this.http.delete(this.url + '/' +id)
    .pipe(catchError((error: Response) => {
      if(error.status === 404 )
          return Observable.throw(new NotFoundError(error));
        return Observable.throw(new AppError(error));
    
    }));
  }

}
