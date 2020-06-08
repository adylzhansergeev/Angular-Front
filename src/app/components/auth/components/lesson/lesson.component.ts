import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ChapterService} from '../../../../services/chapter.service';
import {LessonService} from '../../../../services/lesson.service';
import {Lesson} from '../../../../models/lesson';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  lesson: Lesson;
  constructor(private route: ActivatedRoute,
              private chapterService: ChapterService,
              private lessonService: LessonService,
              private router: Router) { }

  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.route.params.subscribe(value => {
      this.lessonService.getLessonById(value.id).subscribe(perf => {
        this.lesson = perf;
      }, error => {
        this.router.navigateByUrl('/auth/error');
      });
    });
  }
}
