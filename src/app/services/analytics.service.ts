import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import * as Highcharts from 'highcharts';
import {Data} from '../components/admin/shared/components/table/table.component';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  apiUrl: string = environment.apiUrl + '/api/analytics';
  constructor(private http: HttpClient) {
  }
  public getAnalytics(): Observable<Highcharts.PointOptionsType[]> {
    return this.http.get<Highcharts.PointOptionsType[]>(this.apiUrl);
  }
  public getLength(): Observable<number> {
    return this.http.get<number>(this.apiUrl + '/length');
  }

  public getAllAnalytics(): Observable<Data[]> {
    return this.http.get<Data[]>(this.apiUrl);
  }
}
