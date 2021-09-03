import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './services/authors.service';
import { EmailService } from './services/email.service';
import { CoursesService } from './services/courses.service';
import { SummaryPipe } from './summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormateDirective } from './input-formate.directive';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormFormArrayComponent } from './new-course-form-form-array/new-course-form-form-array.component';
import { NewCourseFormbuilderComponent } from './new-course-formbuilder/new-course-formbuilder.component';
import { PasswordResetFormComponent } from './password-reset-form/password-reset-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FavouriteComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    InputFormateDirective,
    NewCourseFormComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormFormArrayComponent,
    NewCourseFormbuilderComponent,
    PasswordResetFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA 
  ],
  providers: [
    EmailService,
    AuthorsService,
    CoursesService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
