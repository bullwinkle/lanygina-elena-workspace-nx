import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  @Input() courseId = '';
}
