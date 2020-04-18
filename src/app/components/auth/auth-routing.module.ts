import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';
import {AboutComponent} from './components/about/about.component';
import {ScheduleComponent} from './components/schedule/schedule.component';
import {CoursesComponent} from './components/courses/courses.component';
const routes: Routes = [
  {path: '', component: AuthComponent, children: [
      {path: '', redirectTo: '/auth/schedule', pathMatch: 'full'},
      {path: 'about', component: AboutComponent},
      {path: 'schedule', component: ScheduleComponent},
      {path: 'courses', component: CoursesComponent}
  ]}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
