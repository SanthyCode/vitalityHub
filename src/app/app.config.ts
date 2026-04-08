import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router'; // 1. Agregas withHashLocation aquí

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation()) 
  ]
};