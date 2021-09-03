import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseFormFormArrayComponent } from './new-course-form-form-array.component';

describe('NewCourseFormFormArrayComponent', () => {
  let component: NewCourseFormFormArrayComponent;
  let fixture: ComponentFixture<NewCourseFormFormArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCourseFormFormArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseFormFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
