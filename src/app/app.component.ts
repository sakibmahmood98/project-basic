import { Component, Input } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { merge, Observable } from 'rxjs';
import { map } from 'rxjs-compat/operator/map';
import { mapTo, tap } from 'rxjs/operators';
import { FavoriteChangedEventArgs } from './favourite/favourite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses$!: Observable<any[]>;
  courses!: any[];

  constructor(private db: AngularFireDatabase) {
    

    this.courses$ = db.list('/courses').valueChanges();
  }


  add(course: HTMLInputElement) {
    this.db.list('/courses').push({Name : 5, Value: course.value});
    course.value = '';
  }



  title = 'boo';
  post = {
    title: "Title",
    isFavourite:true

  }

  task = {
    title: 'Review applications',
    assignee: null
  }

  tweet = {
    body: 'here is the body of a tweet...',
    isLiked: true,
    likesCount: 10 
  }

  onFavouriteChanged(eventArgs: FavoriteChangedEventArgs) {

    console.log("favorite changed",eventArgs );

  }
  
}
