import { Routes } from '@angular/router';
import { Header } from './features/header/header';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: Header
            }
        ]
    },
    {
        path: 'Apropos',
        loadComponent: () => import('./features/apropos/apropos').then(m => m.Apropos)
    },
    {
        path: 'Competences',
        loadComponent: () => import('./features/competences/competences').then(m => m.Competences)
    },
    {
        path: 'Experience',
        loadComponent: () => import('./features/experience/experience').then(m => m.Experience)
    },
    {
        path: 'Projets',
        loadComponent: () => import('./features/projets/projets').then(m => m.Projets)
    },
    {
        path: 'Contact',
        loadComponent: () => import('./features/contact/contact').then(m => m.Contact)
    },
    {
        path: 'TableauDeBord',
        loadComponent: () => import('./features/tableau-de-bord/tableau-de-bord').then(m => m.TableauDeBord)
    }
];
