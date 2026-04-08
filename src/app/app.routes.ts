import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Artr3finComponent } from './pages/artr3fin/artr3fin.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'artr3fin',
        component: Artr3finComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
