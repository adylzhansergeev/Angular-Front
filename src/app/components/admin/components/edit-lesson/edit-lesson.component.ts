import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {LessonService} from '../../../../services/lesson.service';
import {Lesson} from '../../../../models/lesson';

@Component({
  selector: 'app-edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.css']
})
export class EditLessonComponent implements OnInit {
  form: FormGroup;
  lesson: Lesson;
  constructor( private route: ActivatedRoute,
               private lessonService: LessonService) { }

  ngOnInit() {
    this.route.params.subscribe(value => {
      this.lessonService.getOne(value.id).subscribe(perf => {
        this.lesson = perf;
        this.form = new FormGroup({
          title: new FormControl(this.lesson.title, Validators.required),
          content: new FormControl(this.lesson.content, Validators.required),
          orderValue: new FormControl(this.lesson.orderValue, Validators.required),
          active: new FormControl(this.lesson.active, Validators.required),
        });
      }, error => {
        console.log(error);
      });
    });
  }

  submit() {
    if (this.form.invalid){
      return;
    }
    const lesson: Lesson = {
      id: this.lesson.id,
      title: this.form.value.title,
      content: this.form.value.content,
      orderValue: this.form.value.orderValue,
      active: this.form.value.active,
      chapter: this.lesson.chapter,
      course: this.lesson.course,
      addedDate: this.lesson.addedDate,
      lessonType: this.lesson.lessonType,
    };
    this.lessonService.updateLesson(lesson).subscribe( perf => {
      console.log(perf);
      }
    );
  }
}
