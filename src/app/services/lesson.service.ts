import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Lesson} from '../models/lesson';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  apiUrl: string = environment.apiUrl + '/api/lessons';
  constructor(private http: HttpClient ) {
  }
  public getOne(id: number): Observable<Lesson> {
    return this.http.get<Lesson>(this.apiUrl + '/' + id);
  }
  public findByChapterId(id: number): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.apiUrl + '/chapter/' + id);
  }
  public add(lesson: Lesson): Observable<any> {
    console.log(lesson);
    return this.http.post<any>(this.apiUrl + '/add', lesson);
  }
  public updateLesson(lesson: Lesson): Observable<Lesson> {
    console.log(lesson);
    return this.http.patch<Lesson>(this.apiUrl + '/update', lesson);
  }
  public getLessonById(id: number): Observable<Lesson> {
    return this.http.get<Lesson>(this.apiUrl + '/getLesson/' + id);
  }
}
