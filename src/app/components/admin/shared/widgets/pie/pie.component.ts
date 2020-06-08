import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as Highcharts from 'highcharts';
import {AnalyticsService} from '../../../../../services/analytics.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  chartOptions: {};
  pie = Highcharts;
  data: Highcharts.PointOptionsType[] = [];
  @Output() onAdd: EventEmitter<number> = new EventEmitter<number>();
  constructor(private analyticsService: AnalyticsService) {
  }
  ngOnInit() {
    this.analyticsService.getAnalytics().subscribe(perf => {
      this.data = perf;
      this.addLengthData();
      this.chartOptions = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Подписки на курсы: '
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: this.data
        }]
      };
    }, error => {
      console.log(error);
    });
  }
  addLengthData() {
    this.onAdd.emit(this.data.length);
  }
}
