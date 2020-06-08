import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './admin-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutComponent } from './components/about/about.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import { AddComponent } from './components/add/add.component';
import { CourseComponent } from './components/course/course.component';
import { EditLessonComponent } from './components/edit-lesson/edit-lesson.component';
import { EditChapterComponent } from './components/edit-chapter/edit-chapter.component';
import {QuillModule} from 'ngx-quill';
import { ChapterLecComponent } from './components/chapter-lec/chapter-lec.component';
import { ChapterLabComponent } from './components/chapter-lab/chapter-lab.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import {HighchartsChartModule} from 'highcharts-angular';
import {CounterModule} from 'ngx-counter';
import {MatTableModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PieComponent } from './shared/widgets/pie/pie.component';
import { TableComponent } from './shared/components/table/table.component';
import {MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AdminComponent,
    HomePageComponent,
    AboutComponent,
    AddComponent,
    CourseComponent,
    EditLessonComponent,
    EditChapterComponent,
    ChapterLecComponent,
    ChapterLabComponent,
    AnalyticsComponent,
    PieComponent,
    TableComponent,
  ],
  imports: [
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    HighchartsChartModule,
    CounterModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule
  ],
  exports: [QuillModule],
  providers: []
})
export class AdminModule {
}
