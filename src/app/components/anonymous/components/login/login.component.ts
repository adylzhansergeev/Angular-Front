import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../../models/user';
import {AuthService} from '../../../../services/auth.service';
import {Router} from '@angular/router';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isTrue: boolean;
  errorText: string;
  constructor(private auth: AuthService, private router: Router, public userService: UserService) {
  }

  ngOnInit() {
    this.isTrue = false;
    this.form = new FormGroup({username: new FormControl(null, [
      Validators.required,
      Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])});
  }
  submit() {
   if (this.form.invalid) {
     return;
   }
   const user: User = this.form.getRawValue();
   this.userService.login(user).subscribe(perf => {
       this.auth.setToken(perf);
       if (this.auth.getRole().scopes.authority === 'ROLE_ADMIN') {
         this.router.navigateByUrl('/admin');
         return;
       }
       this.router.navigateByUrl('/auth');
     }, error => {
     if (error.status === 401) {
       this.errorText = 'неверное имя пользователя или пароль';
       this.isTrue = true;
     }
     }
   );
  }
}
