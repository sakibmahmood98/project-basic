import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-formbuilder',
  templateUrl: './new-course-formbuilder.component.html',
  styleUrls: ['./new-course-formbuilder.component.css']
})
export class NewCourseFormbuilderComponent {

  form;

  constructor(fb: FormBuilder)
  {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }
  

  get topics()
  {
    return this.form.get('topics') as FormArray;
  }


}
