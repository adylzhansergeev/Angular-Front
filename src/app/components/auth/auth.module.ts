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


@NgModule({
  declarations: [
    AuthComponent,
    AboutComponent,
    CoursesComponent,
    ScheduleComponent
  ],
  imports: [
    AuthRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
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
