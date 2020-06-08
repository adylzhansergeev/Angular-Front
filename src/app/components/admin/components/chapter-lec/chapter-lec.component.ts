import { Component, OnInit } from '@angular/core';
import {Chapter} from '../../../../models/chapter';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ChapterService} from '../../../../services/chapter.service';
import {LessonService} from '../../../../services/lesson.service';
import {Lesson} from '../../../../models/lesson';
import {LessonType} from '../../../../models/lessonType';

@Component({
  selector: 'app-chapter-lec',
  templateUrl: './chapter-lec.component.html',
  styleUrls: ['./chapter-lec.component.css']
})
export class ChapterLecComponent implements OnInit {
  chapter: Chapter;
  form: FormGroup;
  lessons: Lesson[];
  constructor(private route: ActivatedRoute,
              private chapterService: ChapterService,
              private lessonService: LessonService) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
      orderValue: new FormControl(null, Validators.required)
    });
    this.refresh();
  }
  refresh() {
    this.route.params.subscribe( value => {
      this.chapterService.findById(value.id).subscribe(perf => {
          this.chapter = perf;
        // tslint:disable-next-line:no-shadowed-variable
          this.lessonService.findByChapterId(this.chapter.id).subscribe(perf => {
              this.lessons = perf;
            }
          );
        }
      );
    });
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    const lesson: Lesson = {
    id: null,
    title: this.form.value.title,
    content: this.form.value.content,
    orderValue: this.form.value.orderValue,
    addedDate: new Date(),
    course: this.chapter.course,
    chapter: this.chapter,
    active: 1,
    lessonType: new LessonType(1, 'lecture'),
    };
    this.lessonService.add(lesson).subscribe(value => {
      console.log(value);
      this.refresh();
      }
    );
  }
}
