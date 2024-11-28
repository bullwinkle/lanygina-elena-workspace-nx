import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationItem, NavigationService} from '../../services/navigation.service';
import {RouterLink} from '@angular/router';
import {Course, CoursesService} from '../../services/courses.service';


@Component({
  selector: 'app-navigation-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <a [routerLink]="item.path">{{ item.label }}</a>

    <ul *ngIf="item.children">
      <li *ngFor="let child of item.children">
        <app-navigation-item [item]="child"></app-navigation-item>
      </li>
    </ul>
  `,
  styleUrl: './navigation.component.css',
})
export class NavigationItemComponent {
  @Input() item!: NavigationItem;
}


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, NavigationItemComponent],
  template: `
    <nav>
      <ul>
        <li *ngFor="let item of navigation">
          <app-navigation-item [item]="item"></app-navigation-item>
        </li>
      </ul>
    </nav>
  `,
  styleUrl: './navigation.component.css',
})
export class NavigationComponent implements OnInit {
  navigation: NavigationItem[] = [];
  courses: Course[] = [];

  constructor(
    private navigationService: NavigationService,
    private coursesService: CoursesService
  ) {
  }

  async ngOnInit() {
    this.navigation = await this.navigationService.getNavigation();
    this.courses = await this.coursesService.getCourses();
  }
}
