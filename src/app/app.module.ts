import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
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
import { AppErrorHandler } from './common/validators/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { RouterModule } from '@angular/router';
import { NotFoundError } from './common/validators/not-found-error';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArchiveComponent } from './archive/archive.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { OrderService } from './services/order.service';
import { fakeBackendProvider } from './Helper/fake-backend';
import {JwtModule} from '@auth0/angular-jwt'
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';

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
    PostsComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
    ArchiveComponent,
    LoginComponent,
    AdminComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([

      { path: '', component: HomeComponent},
      { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
      { path: 'login', component: LoginComponent},
      { path: 'no-access', component: NoAccessComponent},
      { path: 'archive/:year/:month', component: ArchiveComponent},
      { path: 'followers/:id/:username', component: GithubProfileComponent},
      { path: 'followers', component: GithubFollowersComponent },
      { path: 'posts', component: PostsComponent},
      { path: '**', component: NotFoundComponent}
  
  ]),
  JwtModule.forRoot({
    config: {
      tokenGetter:() => {
         return localStorage.getItem('access_token'); 
      },
    },
 })
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA 
  ],
  providers: [
    OrderService,
    AuthorsService,
    EmailService,
    AuthorsService,
    CoursesService,
    PostService,
    AuthService,
    AuthGuardService,
    AdminAuthGuardService,
    GithubFollowersService,
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
