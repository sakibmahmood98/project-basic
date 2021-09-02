import { Component, Input } from '@angular/core';
import { FavoriteChangedEventArgs } from './favourite/favourite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



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
