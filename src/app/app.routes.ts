import { Routes } from '@angular/router';
import { Apropos } from './features/apropos/apropos';
import { Competences } from './features/competences/competences';
import { Experience } from './features/experience/experience';
import { Projets } from './features/projets/projets';
import { Contact } from './features/contact/contact';
import { TableauDeBord } from './features/tableau-de-bord/tableau-de-bord';
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
        component: Apropos
    },
    {
        path: 'Competences',
        component: Competences
    },
    {
        path: 'Experience',
        component: Experience
    },
    {
        path: 'Projets',
        component: Projets
    },
    {
        path: 'Contact',
        component: Contact
    },
    {
        path: 'TableauDeBord',
        component: TableauDeBord
    }
];
