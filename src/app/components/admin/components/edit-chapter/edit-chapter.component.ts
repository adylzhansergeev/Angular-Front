import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Chapter} from '../../../../models/chapter';
import {ActivatedRoute, Params} from '@angular/router';
import {ChapterService} from '../../../../services/chapter.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-edit-chapter',
  templateUrl: './edit-chapter.component.html',
  styleUrls: ['./edit-chapter.component.css']
})
export class EditChapterComponent implements OnInit {
  form: FormGroup;
  chapter: Chapter;
  constructor(private route: ActivatedRoute,
              private chapterService: ChapterService) { }

  ngOnInit() {
    this.route.params.subscribe(value => {
      this.chapterService.findById(value.id).subscribe(perf => {
        this.chapter = perf;
        this.form = new FormGroup({
          name: new FormControl(this.chapter.name, Validators.required),
          description: new FormControl(this.chapter.description, Validators.required),
          orderValue: new FormControl(this.chapter.orderValue, Validators.required),
          active: new FormControl(this.chapter.active, Validators.required),
        });
      }, error => {
        console.log(error);
      });
    });
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    const chapter: Chapter = {
      id: this.chapter.id,
      name: this.form.value.name,
      description: this.form.value.description,
      orderValue: this.form.value.orderValue,
      active: this.form.value.active,
      course: this.chapter.course,
      addedDate: this.chapter.addedDate
    };
    this.chapterService.updateChapter(chapter).subscribe(perf => {
      console.log(perf);
    });
  }
  getChapter() {
  }
}

