import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Chapters} from '../models/chapters';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  apiUrl: string = environment.apiUrl + '/api/chapters';
  constructor(private http: HttpClient) {
  }
  public addChapter(chapter: Chapters): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/add', chapter);
  }
  public findById(id: number): Observable<Chapters> {
    return this.http.get<Chapters>(this.apiUrl + '/' + id);
  }
  public getChaptersByCourseId(id: number): Observable<Chapters[]> {
    return this.http.get<Chapters[]>(this.apiUrl + '/course/' + id);
  }
}
