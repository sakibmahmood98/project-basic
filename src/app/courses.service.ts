import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  getCourses() {
    return ["courses1","courses2","courses4"];
  }
}
