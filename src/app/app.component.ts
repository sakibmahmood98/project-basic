import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { NgRedux, select } from 'ng2-redux';
import { merge, Observable } from 'rxjs';
import { map } from 'rxjs-compat/operator/map';
import { mapTo, tap } from 'rxjs/operators';
import { INCREMENT } from './action';
import { FavoriteChangedEventArgs } from './favourite/favourite.component';
import { CoursesService } from './services/courses.service';
import { IAppState } from './store';
import { Map } from 'immutable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  // courses$!: Observable<any[]>;
  //  //courses$! : AngularFireList<any>
  // courses!: any[];

  // constructor(private courseDb: CoursesService, private db: AngularFireDatabase) {

  //   //this.courses$  = db.list('/courses');
    

  //   //this.courses$ = db.list('/courses').valueChanges();
  // }

  // ngOnInit() {
  //   this.courses$ = this.courseDb.get();
  //  }


  // add(course: HTMLInputElement) {
  //   this.db.list('/courses').push(course.value);
  //   course.value = '';
  // }

  // update(course: any) {
  //   this.db.object('/courses/'+ course)
  //   .set(course + ' UPDATED');
  // }

  // delete(course: any) {
  //   this.db.object('/courses/'+ course)
  //   .remove();
  // }


  // title = 'boo';
  // post = {
  //   title: "Title",
  //   isFavourite:true

  // }

  // task = {
  //   title: 'Review applications',
  //   assignee: null
  // }

  // tweet = {
  //   body: 'here is the body of a tweet...',
  //   isLiked: true,
  //   likesCount: 10 
  // }

  // onFavouriteChanged(eventArgs: FavoriteChangedEventArgs) {

  //   console.log("favorite changed",eventArgs );

  // }

  // colors = [
  //   {id: 1, name: 'Red'},
  //   {id: 2, name: 'Green'},
  //   {id: 3, name: 'Blue'},
  // ]

  // color = 2;


  
  // isChecked = true;
  // onChange($event: any) {
  //   console.log($event);
  // }

  // categories = [
  //   {name: 'Beginner'},
  //   {name: 'Intermediate'},
  //   {name: 'Advanced'}
  // ]

  // selectCategory(category: any){
  //   this.categories
  //   .filter(c => c!=category)
  //   .forEach((c: any) => c.selected = false);

  //   category.selected =! category.selected;



  // }

  title = 'app works';

  @select(s =>s.get('counter')) count: any; //state.get('cunter)
  // @select(['messaging', 'newMessages']) newMessage: any;
  // @select((s:IAppState) =>s.messaging?.newMessage) newMessagesCount: any;

  constructor(private ngRedux: NgRedux<Map<string, any>>) {
    // var subscription = ngRedux.subscribe(() => {
    //   var store = ngRedux.getState();
    //   this.counter = store.counter;
    // });
   }

  increment() {
    //this.counter++;
    this.ngRedux.dispatch({type: INCREMENT});
  }






  
}
