import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../../models/user';
import {AuthService} from '../../../../services/auth.service';
import {UserService} from '../../../../services/user.service';
import {Router} from '@angular/router';
import * as bcrypt from 'bcryptjs';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  form: FormGroup;
  user: User;
  errorText: string;
  isTrue = false;
  errorColor: string;
  constructor(private auth: AuthService,
              private userService: UserService,
              private router: Router) {
  }
  ngOnInit() {
    if (this.auth.checkAvailability()) {
      this.userService.currentUser().subscribe(perf  => {
        this.user = perf;
      });
    }
    this.form = new FormGroup({password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      new_password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      confirm_new_password: new FormControl(null,[
        Validators.required,
        Validators.minLength(6)
      ])}
    );
  }
  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
  updatePassword() {
    const salt = bcrypt.genSaltSync(10);
    const pass = this.form.value.password;
    const text = this.form.value.new_password;
    const str = this.form.value.confirm_new_password;
    if (text !== str) {
      this.isTrue = true;
      this.errorColor = 'danger';
      this.errorText = 'Убедитесь, что пароли совпадают.';
      setTimeout(() => {
        this.isTrue = false;
      }, 4000);
      return;
    } else if (bcrypt.compareSync(pass, this.user.password) === false) {
      this.isTrue = true;
      this.errorColor = 'danger';
      this.errorText = 'Вы неправильно ввели свой старый пароль. Введите его еще раз';
      setTimeout(() => {
        this.isTrue = false;
      }, 4000);
      return;
    }
    this.user.password = bcrypt.hashSync(text, salt);
    console.log(this.user.password);
    this.userService.updatePassword(this.user).subscribe(perf => {
      this.isTrue = true;
      this.errorColor = 'success';
      this.errorText = 'Профиль изменен успешно';
      setTimeout(() => {
        this.isTrue = false;
      }, 4000);
    });
  }
}
