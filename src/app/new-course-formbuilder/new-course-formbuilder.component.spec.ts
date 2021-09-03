import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseFormbuilderComponent } from './new-course-formbuilder.component';

describe('NewCourseFormbuilderComponent', () => {
  let component: NewCourseFormbuilderComponent;
  let fixture: ComponentFixture<NewCourseFormbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCourseFormbuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseFormbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
