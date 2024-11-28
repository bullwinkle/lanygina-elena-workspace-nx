import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-register.component.html',
  styleUrl: './course-register.component.css',
})
export class CourseRegisterComponent {
  @Input() courseId!: any;
}
