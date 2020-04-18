import { Component, OnInit } from '@angular/core';
import {Course} from '../../../../models/course';
import {CourseService} from '../../../../services/course.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  courses: Course[];
  constructor(
    private courseService: CourseService,
    private router: Router) { }

  ngOnInit() {
    this.courseService.findAll().subscribe(perf => {
      this.courses = perf;
    }, error => {
      console.log(error);
    });
  }
}
