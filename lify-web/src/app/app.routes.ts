import { Routes } from '@angular/router';
import { MicrogreenAboutComponent } from './microgreen-about/microgreen-about.component';
import { MicrogreenShopComponent } from './microgreen-shop/microgreen-shop.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    {
        path: 'microgreens', 
        component: MicrogreenShopComponent
    },
    {
        path: 'about', 
        component: MicrogreenAboutComponent
    },
    {
        path: 'contact',
        component: SignUpComponent
    },
];
