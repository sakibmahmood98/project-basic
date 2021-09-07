import { Component, Input } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { FavoriteChangedEventArgs } from './favourite/favourite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses$!: Observable<any[]>;
  courses!: any[];

  constructor(db: AngularFireDatabase) {

    this.courses$ = db.list('/courses').valueChanges();
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
