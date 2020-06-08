import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../services/auth.service';
import {Course} from '../../../../models/course';
import {StudentCourseService} from '../../../../services/studentCourse.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course [];
  constructor(private auth: AuthService,
              private studentCourseService: StudentCourseService) {
  }

  ngOnInit() {
    this.getCourses();
  }
  getCourses() {
    this.studentCourseService.findAllById().subscribe(perf => {
      this.courses = perf;
    }, error => {
      console.log(error);
    });
  }
}
