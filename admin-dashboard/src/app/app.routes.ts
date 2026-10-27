import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'dashboard', 
        pathMatch: 'full' 
    },
    {
        path: 'dashboard',
        title: 'route.dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard),
    },
    {
        path: 'tables',
        title: 'route.tables',
        loadComponent: () => import('./pages/tables/tables').then(m => m.Tables),
    }
];
