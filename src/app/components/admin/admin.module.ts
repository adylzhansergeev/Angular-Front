import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './admin-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutComponent } from './components/about/about.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import { AddComponent } from './components/add/add.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { EditLessonComponent } from './components/edit-lesson/edit-lesson.component';
import { EditChapterComponent } from './components/edit-chapter/edit-chapter.component';
import { EditChapterLabComponent } from './components/edit-chapter-lab/edit-chapter-lab.component';
import {QuillModule} from 'ngx-quill';

@NgModule({
  declarations: [
    AdminComponent,
    HomePageComponent,
    AboutComponent,
    AddComponent,
    EditCourseComponent,
    EditLessonComponent,
    EditChapterComponent,
    EditChapterLabComponent
  ],
    imports: [
        AdminRoutingModule,
        FormsModule,
        HttpClientModule,
        CommonModule,
        ReactiveFormsModule,
        QuillModule.forRoot()
    ],
  exports: [QuillModule],
  providers: []
})
export class AdminModule {
}
