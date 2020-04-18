import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Course} from '../../../../models/course';
import {CourseService} from '../../../../services/course.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ChapterService} from '../../../../services/chapter.service';
import {Chapters} from '../../../../models/chapters';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  course: Course = new Course();
  chapters: Chapters[] = [];
  form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private chapterService: ChapterService,
    private router: Router
  ) { }

  ngOnInit() {
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
     this.form = new FormGroup({
       name: new FormControl(null, Validators.required),
       description: new FormControl(null, Validators.required),
       orderValue: new FormControl(null, Validators.required)
     });
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    const chapter: Chapters = {
      name: this.form.value.name,
      description: this.form.value.description,
      orderValue: this.form.value.orderValue,
      addedDate: new Date(),
      active: 1,
      course: this.course
    };
    this.chapterService.addChapter(chapter).subscribe(perf => {
      console.log(perf);
    });
  }

}
