import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';
import {AboutComponent} from './components/about/about.component';
import {ScheduleComponent} from './components/schedule/schedule.component';
import {CoursesComponent} from './components/courses/courses.component';
import {CourseComponent} from './components/course/course.component';
import {AccessDenidedComponent} from './components/access-denided/access-denided.component';
import {ChapterLecComponent} from './components/chapter-lec/chapter-lec.component';
import {ChapterLabComponent} from './components/chapter-lab/chapter-lab.component';
import {LessonComponent} from './components/lesson/lesson.component';
const routes: Routes = [
  {path: '', component: AuthComponent, children: [
      {path: '', redirectTo: '/auth/schedule', pathMatch: 'full'},
      {path: 'about', component: AboutComponent},
      {path: 'schedule', component: ScheduleComponent},
      {path: 'courses', component: CoursesComponent},
      {path: 'course/:id', component: CourseComponent},
      {path: 'error', component: AccessDenidedComponent},
      {path: 'chapter/lec/:id', component: ChapterLecComponent},
      {path: 'chapter/lab/:id', component: ChapterLabComponent},
      {path: 'lesson/:id', component: LessonComponent}
  ]}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
