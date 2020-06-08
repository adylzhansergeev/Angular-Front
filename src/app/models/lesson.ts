import {Chapter} from './chapter';
import {Course} from './course';
import {LessonType} from './lessonType';

export class Lesson {
  id: number;
  title: string;
  content: string;
  orderValue: number;
  addedDate: Date;
  course: Course;
  chapter: Chapter;
  lessonType: LessonType;
  active: number;
  constructor() {
  }
}
