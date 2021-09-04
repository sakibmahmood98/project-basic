import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Observable  } from 'rxjs';
import { NotFoundError } from './not-found-error';
import { AppError } from './app-error';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(@Inject(String) private url: string,private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
    .pipe(catchError(this.handleError));
  }

  create(resource: any) {
      return Observable.throwError(new AppError());
    // return this.http.post(this.url,JSON.stringify(resource))
    // .pipe(catchError(this.handleError));
  }

  update(resource: any) {
    return this.http.patch(this.url + '/' +resource.id, JSON.stringify({isRead:true}))
    .pipe(catchError(this.handleError));
  }

  delete(id: any) {
      return Observable.throwError(new AppError());
    //return this.http.delete(this.url + '/' +id).pipe(catchError(this.handleError));
    //.pipe(catchError(this.handleError()));
  }

  private handleError(error: Response) {
    if(error.status === 404 )
      return Observable.throw(new NotFoundError());

  return Observable.throw(new AppError(error));

}
}
