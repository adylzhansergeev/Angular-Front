import {Course} from './course';

export class Chapters {
  id?: number;
  name: string;
  description: string;
  orderValue: number;
  course: Course;
  addedDate: Date;
  active: number;
  constructor() {
  }
}
