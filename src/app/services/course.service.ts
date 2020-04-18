import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from '../models/course';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  apiUrl: string = environment.apiUrl + '/api/courses';
  constructor(public http: HttpClient) {
  }
  public findAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }
  public findOne(id: number): Observable<Course> {
    return this.http.get<Course>(this.apiUrl + '/' + id);
  }
}
