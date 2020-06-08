import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Chapter} from '../../../../models/chapter';
import {ChapterService} from '../../../../services/chapter.service';
import {Lesson} from '../../../../models/lesson';
import {LessonService} from '../../../../services/lesson.service';

@Component({
  selector: 'app-chapter-lec',
  templateUrl: './chapter-lec.component.html',
  styleUrls: ['./chapter-lec.component.scss']
})
export class ChapterLecComponent implements OnInit {
  chapter: Chapter;
  lessons: Lesson[];
  constructor(private route: ActivatedRoute,
              private chapterService: ChapterService,
              private lessonService: LessonService,
              private router: Router) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.route.params.subscribe(value => {
      this.chapterService.getChapter(value.id).subscribe(perf => {
        this.chapter = perf;
        // tslint:disable-next-line:no-shadowed-variable
        this.lessonService.findByChapterId(this.chapter.id).subscribe(perf => {
          this.lessons = perf;
          }
        );
      }, error => {
        this.router.navigateByUrl('/auth/error');
      }
     );
    });
  }

}
