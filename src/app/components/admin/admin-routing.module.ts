import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {AboutComponent} from './components/about/about.component';
import {AddComponent} from './components/add/add.component';
import {EditCourseComponent} from './components/edit-course/edit-course.component';
import {EditChapterComponent} from './components/edit-chapter/edit-chapter.component';
import {EditChapterLabComponent} from './components/edit-chapter-lab/edit-chapter-lab.component';
const routes: Routes = [
  {path: '', component: AdminComponent, children: [
      {path: '', redirectTo: '/admin/home', pathMatch: 'full'},
      {path: 'home', component: HomePageComponent},
      {path: 'about', component: AboutComponent},
      {path: 'add', component: AddComponent},
      {path: 'course/:id', component: EditCourseComponent},
      {path: 'chapter/lec/:id', component: EditChapterComponent},
      {path: 'chapter/lab/:id', component: EditChapterLabComponent},
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
