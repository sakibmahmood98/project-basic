import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private db: AngularFireDatabase) {}
  get (): Observable<any[]>{
    return this.db.list('/courses').valueChanges();

  }

  getCourses() {
    return ["courses1","courses2","courses4"];
  }
}
