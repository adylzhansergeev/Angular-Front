import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class StudentCourseService {
  apiUrl: string = environment.apiUrl + '/api/student/course';
  constructor(private http: HttpClient) {
  }
  public findAllById(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }
}
