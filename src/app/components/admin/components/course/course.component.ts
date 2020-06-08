import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Course} from '../../../../models/course';
import {CourseService} from '../../../../services/course.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ChapterService} from '../../../../services/chapter.service';
import {Chapter} from '../../../../models/chapter';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  course: Course;
  chapters: Chapter[] = [];
  form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private chapterService: ChapterService,
    private router: Router
  ) { }

  ngOnInit() {
     this.form = new FormGroup({
       name: new FormControl(null, Validators.required),
       description: new FormControl(null, Validators.required),
       orderValue: new FormControl(null, Validators.required)
     });
     this.refresh();
  }
  Onsubmit() {
    if (this.form.invalid) {
      return;
    }
    const chapter: Chapter = {
      id: null,
      name: this.form.value.name,
      description: this.form.value.description,
      orderValue: this.form.value.orderValue,
      addedDate: new Date(),
      active: 1,
      course: this.course
    };
    this.chapterService.addChapter(chapter).subscribe(perf => {
      console.log(perf);
      this.refresh();
    });
  }
  refresh() {
    this.route.params.subscribe(value => {
      this.courseService.findOne(value.id).subscribe(perf => {
        this.course = perf;
        // tslint:disable-next-line:no-shadowed-variable
        this.chapterService.getChaptersByCourseId(this.course.id).subscribe( perf => {
            this.chapters = perf;
          }
        );
      });
    });
  }
  deleteChapter(id: number) {
    console.log(id);
  }

}
