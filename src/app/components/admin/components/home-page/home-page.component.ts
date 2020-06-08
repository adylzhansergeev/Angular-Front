import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../../services/course.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'addedDate', 'update', 'delete'];
  dataSource;
  constructor(
    private courseService: CourseService,
    private router: Router) { }

  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.courseService.findAll().subscribe(perf => {
      this.dataSource = new MatTableDataSource(perf);
    }, error => {
      console.log(error);
    });
  }
  /*submit() {
    if (this.form.invalid) {
      return;
    }
    const course: Course = {
      id: null,
      name: this.form.value.name,
      description: this.form.value.description,
      addedDate: new Date(),
      active: 1,
    };
    this.courseService.add(course).subscribe(perf => {
      console.log(course);
      this.refresh();
    });
  }*/
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
