import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../services/auth.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  jwt() {
    this.auth.getRole();
  }
}
