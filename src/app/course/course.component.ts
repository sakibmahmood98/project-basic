import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'course',
  template: `
  <h2> {{title}} </h2>
  <h2 [textContent]="title"> </h2> <!-- Property Binding -->
  
  <img src="{{imageUrl}}"/>
  <img [src]="title"/>   <!-- Property Binding -->

  <!-- 
  <table>
  <tr>
  <td [colspan] = "colSpan"></td> //Attribute Binging
  </tr>
  </table>
  -->

  <button class="btn btn-primary" [class.active]="isActive">Save</button>   <!-- Class Binding -->


  <button [style.backgroundColor]="isActive ? 'blue' : 'white' ">Save</button>   <!-- Style Binding -->
  <!-- 
  <button (click)="onSave()">Save</button>
  -->

  <div (click)="onDivClicked()">

  <button (click)="onSave($event)">Save</button>  <!-- Event Binding -->
  </div>


  <!--  <input #email (keyup.enter)="onKeyUp(email.value)"/>  Event Filtering & template variable-->


  <input [(ngModel)]= "email" (keyup.enter)="onKeyUp()" /> <!-- Two way Binding -->


  <!--

  {{course.title | uppercase | lowercase }} <br/>
  {{course.students | number  }} <br/>
  {{course.rating  | number: '2.1-1' }} <br/>
  {{course.price | currency:'AUD' : true: '3.2-2' }} <br/>
  {{course.releaseDate | date:'shortDate' }} <br/>


  {{text | summary : 10}}
  -->

  `,
  templateUrl: './course.component.html',
  //styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title = "List of courses";
  imageUrl = "data:image/jpeg;base64,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"
  colSpan = 2;
  isActive = true;
  courses;

  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  }
  subjects = [
    {id: 1, name: 'subject1'},
    {id: 2, name: 'subject2'},
    {id: 3, name: 'subject3'},
    {id: 4, name: 'subject4'},
    {id: 5, name: 'subject5'}
  ];

  onAdd() {
    this.subjects.push({id: 6, name: 'subject6'});
  }
  canSave = true;

  onRemove(subject: { id: number; name: string; }) {
    let index = this.subjects.indexOf(subject);
    this.subjects.splice(index, 1);

  }


  constructor(service : CoursesService) { 
    this.courses = service.getCourses();

  }


  onDivClicked()
  {
    console.log("Div was clicked");
  }
  onSave($event: any)
  {
    $event.stopPropagation();
    console.log('Button was clicked', $event);
  }

//  onKeyUp(email : any)
//  {
 //     console.log(email);
 // }

  email = "me@example.com";
  onKeyUp()
  {
      console.log(this.email);
  }


  text = `asdkjlf asdfasdhf askd ajsdkfh asdklfjhasdklfjashd fkjasdhjkasd hgkjalsdhgaskdjlgh afdskljgh fasdjk ghakjsdfgh akjsdfhg asdkjfg fjkadsg ahsd kjkj  agksd ghfjkdsa ghkfjdas ghfdsajkg hfdaskjgh akjg afdhjkg aldfsgh adfskjghakdfsg hafkjlg hadfkj `


  ngOnInit(): void {
  }

}
