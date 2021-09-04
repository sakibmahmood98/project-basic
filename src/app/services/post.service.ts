import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Observable  } from 'rxjs';
import { AppError } from '../common/validators/app-error';
import { NotFoundError } from '../common/validators/not-found-error';
import { BadInput } from '../common/validators/bad-input';
import 'rxjs/add/observable/throw'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url)
    .pipe(catchError(this.handleError));
  }

  createPost(post: any) {
    return this.http.post(this.url,JSON.stringify(post))
    .pipe(catchError(this.handleError));
  }

  updatePost(post: any) {
    return this.http.patch(this.url + '/' +post.id, JSON.stringify({isRead:true}))
    .pipe(catchError(this.handleError));
  }

  deletePost(id: any) {
    return this.http.delete(this.url + '/' +id).pipe(catchError(this.handleError));
    //.pipe(catchError(this.handleError()));
  }

  private handleError(error: Response) {
    if(error.status === 404 )
      return Observable.throw(new NotFoundError());

  return Observable.throw(new AppError(error));

}
}
