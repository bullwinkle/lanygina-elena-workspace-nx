import {Injectable} from '@angular/core';

export interface Course {
  name: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  async getCourses(): Promise<Course[]> {
    return [
      {id: 'course_1', name: 'Course 1'},
      {id: 'course_2', name: 'Course 2'},
      {id: 'course_3', name: 'Course 3'}
    ];
  }
}
