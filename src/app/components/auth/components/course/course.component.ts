import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Course} from '../../../../models/course';
import {StudentCourseService} from '../../../../services/studentCourse.service';
import {CourseService} from '../../../../services/course.service';
import {Chapter} from '../../../../models/chapter';
import {ChapterService} from '../../../../services/chapter.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  course: Course;
  chapters: Chapter[] = [];
  constructor(private route: ActivatedRoute,
              private studentCourseService: StudentCourseService,
              private courseService: CourseService,
              private router: Router,
              private chapterService: ChapterService) { }

  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.route.params.subscribe(value => {
      this.courseService.getMyCourse(value.id).subscribe( perf => {
        this.course = perf;
        this.chapterService.getChaptersByCourseId(this.course.id).subscribe(perf =>{
          this.chapters = perf;
        });
      }, error => {
        this.router.navigateByUrl('/auth/error');
      });
    });
  }

}
