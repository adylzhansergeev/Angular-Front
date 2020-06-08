import { Component, OnInit } from '@angular/core';
import {Course} from '../../../../models/course';
import {CourseService} from '../../../../services/course.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  courses: Course[];
  form: FormGroup;
  constructor(
    private courseService: CourseService,
    private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    });
    this.refresh();
  }
  refresh() {
    this.courseService.findAll().subscribe(perf => {
      this.courses = perf;
    }, error => {
      console.log(error);
    });
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    const course: Course = {
      id: null,
      name: this.form.value.name,
      description: this.form.value.description,
      addedDate: new Date(),
      active: 1,
    };
    this.courseService.add(course).subscribe(perf => {
      console.log(course);
      this.refresh();
    });
  }
}
