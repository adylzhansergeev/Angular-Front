import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Chapter} from '../models/chapter';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  apiUrl: string = environment.apiUrl + '/api/chapters';
  constructor(private http: HttpClient) {
  }
  public getChapter(id: number): Observable<Chapter> {
    return this.http.get<Chapter>(this.apiUrl + '/getChapter/' + id);
  }
  public addChapter(chapter: Chapter): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/add', chapter);
  }
  public findById(id: number): Observable<Chapter> {
    return this.http.get<Chapter>(this.apiUrl + '/' + id);
  }
  public getChaptersByCourseId(id: number): Observable<Chapter[]> {
    return this.http.get<Chapter[]>(this.apiUrl + '/course/' + id);
  }
  public updateChapter(chapter: Chapter): Observable<Chapter> {
    return this.http.patch<Chapter>(this.apiUrl, chapter);
  }
}
