import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {CoursesItemComponent} from '../item/course-item.component';
import {CoursesListComponent} from '../courses-list/courses-list.component';

@Component({
  selector: 'app-courses-catalog',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CoursesItemComponent, CoursesListComponent],
  templateUrl: './courses-catalog.component.html',
  styleUrl: './courses-catalog.component.css',
})
export class CoursesCatalogComponent {}
