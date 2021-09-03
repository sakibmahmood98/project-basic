import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course-form-form-array.component.html',
  styleUrls: ['./new-course-form-form-array.component.css']
})
export class NewCourseFormFormArrayComponent  {

  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);

  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }




}



