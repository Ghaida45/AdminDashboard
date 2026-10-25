import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Tables } from './pages/tables/tables';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: Dashboard, title: $localize`:@@route.dashboard:Dashboard` },
    { path: 'tables', component: Tables, title: $localize`:@@route.tables:Tables` },
];
