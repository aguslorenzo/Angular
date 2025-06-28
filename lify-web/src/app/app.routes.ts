import { Routes } from '@angular/router';
import { MicrogreenAboutComponent } from './microgreen-about/microgreen-about.component';
import { MicrogreenShopComponent } from './microgreen-shop/microgreen-shop.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'microgreens',
        pathMatch: 'full'
    },
    {
        path: 'microgreens', 
        component: MicrogreenShopComponent
    },
    {
        path: 'about', 
        component: MicrogreenAboutComponent
    }
];
