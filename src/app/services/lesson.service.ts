import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Lessons} from '../models/lessons';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  apiUrl: string = environment.apiUrl + '/api/lessons';
  constructor(private http: HttpClient ) {
  }
  public getOne(id: number): Observable<Lessons> {
    return this.http.get<Lessons>(this.apiUrl + '/' + id);
  }
  public findByChapterId(id: number): Observable<Lessons[]> {
    return this.http.get<Lessons[]>(this.apiUrl + '/chapter/' + id);
  }
  public add(lesson: Lessons): Observable<any> {
    console.log(lesson);
    return this.http.post<any>(this.apiUrl + '/add', lesson);
  }
}
