import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Chapters} from '../../../../models/chapters';
import {Lessons} from '../../../../models/lessons';
import {ActivatedRoute} from '@angular/router';
import {ChapterService} from '../../../../services/chapter.service';
import {LessonService} from '../../../../services/lesson.service';
import {Course} from '../../../../models/course';
import {LessonTypes} from '../../../../models/lessonTypes';

@Component({
  selector: 'app-edit-chapter',
  templateUrl: './edit-chapter.component.html',
  styleUrls: ['./edit-chapter.component.css']
})
export class EditChapterComponent implements OnInit {
  form: FormGroup;
  chapter: Chapters = new Chapters();
  lessons: Lessons[] = [];
  constructor(private route: ActivatedRoute,
              private chapterService: ChapterService,
              private lessonService: LessonService) { }

  ngOnInit() {
    this.route.params.subscribe( value => {
      this.chapterService.findById(value.id).subscribe(perf => {
        this.chapter = perf;
        this.lessonService.findByChapterId(this.chapter.id).subscribe(perf => {
            this.lessons = perf;
          }
        );
        }
      );
    })
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
      orderValue: new FormControl(null, Validators.required)
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    const lesson: Lessons = {
    title: this.form.value.title,
    content: this.form.value.content,
    orderValue: this.form.value.orderValue,
    addedDate: new Date(),
    chapter: this.chapter,
    active: 1
    };
    this.lessonService.add(lesson).subscribe(perf => {
      console.log(perf);
      }
    );
  }
}
