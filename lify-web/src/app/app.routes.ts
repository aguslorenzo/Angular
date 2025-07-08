import { Routes } from '@angular/router';
import { MicrogreenAboutComponent } from './microgreen-about/microgreen-about.component';
import { MicrogreenShopComponent } from './microgreen-shop/microgreen-shop.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';

export const routes: Routes = [
    {
        path: 'microgreens', 
        component: MicrogreenShopComponent
    },
    {
        path: 'about', 
        component: MicrogreenAboutComponent
    },/*
    {
        path: 'sign-up',
        component: SignUpComponent
    },*/
    {
        path: 'checkout',
        component: CheckoutFormComponent
    },
];
