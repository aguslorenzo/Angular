import { Routes } from '@angular/router';
import { MicrogreenListComponent } from './microgreen-list/microgreen-list.component';
import { MicrogreenAboutComponent } from './microgreen-about/microgreen-about.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'microgreens',
        pathMatch: 'full'
    },
    {
        path: 'microgreens', 
        component: MicrogreenListComponent
    },
    {
        path: 'about', 
        component: MicrogreenAboutComponent
    }
];
