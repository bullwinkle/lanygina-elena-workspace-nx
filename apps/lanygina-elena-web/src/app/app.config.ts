import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {appRoutes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    provideRouter(appRoutes, withComponentInputBinding()),
    provideZoneChangeDetection({eventCoalescing: true}),
  ],
};
