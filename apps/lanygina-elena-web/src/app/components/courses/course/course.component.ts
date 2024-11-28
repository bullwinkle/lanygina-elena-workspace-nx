import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CourseDetailsComponent} from '../details/course-details.component';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, CourseDetailsComponent],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  @Input() courseId = '';
}
