import {Injectable} from '@angular/core';
import {CoursesService} from './courses.service';

export interface NavigationItem {
  path: string;
  label: string,
  children?: NavigationItem[];
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(
    private coursesService: CoursesService
  ) {
  }

  async getCourses(): Promise<(NavigationItem)[]> {
    const courses = await this.coursesService.getCourses();
    return courses.map(course => ({
      path: `courses/${course.id}`,
      label: course.name
    }));
  }

  async getNavigation(): Promise<(NavigationItem)[]> {
    return [
      {path: '', label: 'Home'},
      {path: 'about', label: 'About'},
      {path: 'contacts', label: 'Contacts'},
      {
        path: 'courses', label: 'Courses', children: await this.getCourses()
      }
    ];
  }
}
