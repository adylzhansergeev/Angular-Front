import {NgModule} from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import {AuthRoutingModule} from './auth-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AuthService} from '../../services/auth.service';
import { CoursesComponent } from './components/courses/courses.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import {UserService} from '../../services/user.service';
import {TokenInterceptor} from '../../interceptors/token';
import {AuthComponent} from './auth.component';
import { CourseComponent } from './components/course/course.component';
import { AccessDenidedComponent } from './components/access-denided/access-denided.component';
import { ChapterLecComponent } from './components/chapter-lec/chapter-lec.component';
import { ChapterLabComponent } from './components/chapter-lab/chapter-lab.component';
import { LessonComponent } from './components/lesson/lesson.component';
import {AppModule} from '../../app.module';
import {SafeHtmlPipePipe} from '../../pipes/safe-html-pipe.pipe';
import {SafeUrlPipePipe} from '../../pipes/safe-url-pipe.pipe';

@NgModule({
  declarations: [
    AuthComponent,
    AboutComponent,
    CoursesComponent,
    ScheduleComponent,
    CourseComponent,
    AccessDenidedComponent,
    ChapterLecComponent,
    ChapterLabComponent,
    LessonComponent,
    SafeHtmlPipePipe,
    SafeUrlPipePipe
  ],
  imports: [
    AuthRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [
    UserService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class AuthModule {
}
