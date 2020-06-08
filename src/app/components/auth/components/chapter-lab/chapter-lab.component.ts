import { Component, OnInit } from '@angular/core';
import {Chapter} from '../../../../models/chapter';
import {Lesson} from '../../../../models/lesson';
import {ActivatedRoute, Router} from '@angular/router';
import {ChapterService} from '../../../../services/chapter.service';
import {LessonService} from '../../../../services/lesson.service';

@Component({
  selector: 'app-chapter-lab',
  templateUrl: './chapter-lab.component.html',
  styleUrls: ['./chapter-lab.component.scss']
})
export class ChapterLabComponent implements OnInit {
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
