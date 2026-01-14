import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { AdCampaign } from './layout/ad-campaign/ad-campaign';
import { Product } from './layout/product/product';
import { Home } from './layout/home/home';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'home', component: Home },
    { path: 'product', component: Product },
    { path: 'ad-campaign', component: AdCampaign },
    { path: 'vfx', component: MainLayout },

    { path: '**', redirectTo: 'home' }
];
