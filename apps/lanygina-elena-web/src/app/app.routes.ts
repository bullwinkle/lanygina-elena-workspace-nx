import {ActivatedRouteSnapshot, Route} from '@angular/router';

import {PsihologLandingComponent} from './components/psiholog/landing/psiholog-landing.component';
import {PsihologAboutComponent} from './components/psiholog/about/psiholog-about.component';
import {PsihologContactsComponent} from './components/psiholog/contacts/psiholog-contacts.component';

import {CoursesCatalogComponent} from './components/courses/courses-catalog/courses-catalog.component';
import {CourseRegisterComponent} from './components/courses/register/course-register.component';
import {CourseDetailsComponent} from './components/courses/details/course-details.component';

import {CourseComponent} from './components/courses/course/course.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const resolverCourceId = async (route: ActivatedRouteSnapshot) => (route.parent?.params as {
  courseId: string
})?.courseId ?? 'unknown';

export const appRoutes: Route[] = [
  {path: '', component: PsihologLandingComponent, pathMatch: 'full'},
  {path: 'about', component: PsihologAboutComponent},
  {path: 'contacts', component: PsihologContactsComponent},
  {
    path: 'courses', component: CoursesCatalogComponent, children: [
      {
        path: ':courseId',
        component: CourseComponent,
        children: [
          {
            path: '',
            resolve: {
              courseId: resolverCourceId,
            },
            component: CourseDetailsComponent,
            pathMatch: 'full'
          },
          {
            path: 'register',
            resolve: {
              courseId: resolverCourceId,
            },
            component: CourseRegisterComponent
          },
        ],
      },
    ]
  },

  {path: '**', component: NotFoundComponent},
];
