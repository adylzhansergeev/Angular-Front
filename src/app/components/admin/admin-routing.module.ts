import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {AboutComponent} from './components/about/about.component';
import {AddComponent} from './components/add/add.component';
import {CourseComponent} from './components/course/course.component';
import {EditChapterComponent} from './components/edit-chapter/edit-chapter.component';
import {ChapterLecComponent} from './components/chapter-lec/chapter-lec.component';
import {ChapterLabComponent} from './components/chapter-lab/chapter-lab.component';
import {EditLessonComponent} from './components/edit-lesson/edit-lesson.component';
import {AnalyticsComponent} from './components/analytics/analytics.component';
const routes: Routes = [
  {path: '', component: AdminComponent, children: [
      {path: '', redirectTo: '/admin/about', pathMatch: 'full'},
      {path: 'home', component: HomePageComponent},
      {path: 'about', component: AboutComponent},
      {path: 'add', component: AddComponent},
      {path: 'course/:id', component: CourseComponent},
      {path: 'editChapter/:id', component: EditChapterComponent},
      {path: 'editLesson/:id', component: EditLessonComponent},
      {path: 'chapter/lec/:id', component: ChapterLecComponent},
      {path: 'chapter/lab/:id', component: ChapterLabComponent},
      {path: 'analytics', component: AnalyticsComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
