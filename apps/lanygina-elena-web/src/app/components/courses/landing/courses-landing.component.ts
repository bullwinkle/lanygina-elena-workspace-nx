import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-courses-catalog-landing',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './courses-landing.component.html',
  styleUrl: './courses-landing.component.css',
})
export class CoursesLandingComponent {}
