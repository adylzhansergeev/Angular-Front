import {NgModule} from '@angular/core';
import {LoginComponent} from './components/login/login.component';
import {AnonymousComponent} from './anonymous.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AnonymousRoutingModule} from './anonymous-routing.module';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import {TokenInterceptor} from '../../interceptors/token';

@NgModule({
  declarations: [
    AnonymousComponent,
    LoginComponent,
  ],
  imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  AnonymousRoutingModule
  ],
  providers: [
    AuthService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
    ]
})
export class AnonymousModule {
}
