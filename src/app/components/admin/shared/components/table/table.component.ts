import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import * as Highcharts from 'highcharts';
import {AnalyticsService} from '../../../../../services/analytics.service';
export class Data {
  name: string;
  y: number;
  x?: number;
  constructor() {
  }
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dataSource;
  displayedColumns: string[] = ['name', 'x', 'y'];
  data: Array<Data>;
  lengthData: number;
  constructor(private analyticsService: AnalyticsService) { }
  ngOnInit() {
    this.analyticsService.getLength().subscribe(perf => {
      this.lengthData = perf;
      // tslint:disable-next-line:no-shadowed-variable
      this.analyticsService.getAllAnalytics().subscribe(perf => {
        this.data = perf;
        this.dataSource = new MatTableDataSource(this.data);
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.data.length; i++ ) {
          this.data[i].x = this.lengthData * this.data[i].y / 100;
        }
      });
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
