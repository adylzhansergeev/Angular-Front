import {Chapters} from './chapters';
import {Course} from './course';
import {LessonTypes} from './lessonTypes';

export class Lessons {
  id?: number;
  title: string;
  content: string;
  orderValue: number;
  addedDate: Date;
  course?: Course;
  chapter: Chapters;
  lessonType?: LessonTypes;
  active: number;
  constructor() {
  }
}
