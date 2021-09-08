import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { merge, Observable } from 'rxjs';
import { map } from 'rxjs-compat/operator/map';
import { mapTo, tap } from 'rxjs/operators';
import { FavoriteChangedEventArgs } from './favourite/favourite.component';
import { CoursesService } from './services/courses.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  courses$!: Observable<any[]>;
   //courses$! : AngularFireList<any>
  courses!: any[];

  constructor(private courseDb: CoursesService, private db: AngularFireDatabase) {

    //this.courses$  = db.list('/courses');
    

    //this.courses$ = db.list('/courses').valueChanges();
  }

  ngOnInit() {
    this.courses$ = this.courseDb.get();
   }


  add(course: HTMLInputElement) {
    this.db.list('/courses').push(course.value);
    course.value = '';
  }

  update(course: any) {
    this.db.object('/courses/'+ course)
    .set(course + ' UPDATED');
  }

  delete(course: any) {
    this.db.object('/courses/'+ course)
    .remove();
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


  
  isChecked = true;
  onChange($event: any) {
    console.log($event);
  }






  
}
