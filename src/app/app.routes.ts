import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { AdCampaign } from './layout/ad-campaign/ad-campaign';
import { Product } from './layout/product/product';
import { Home } from './layout/home/home';
import { LandingUi } from './layout/landing-ui/landing-ui';
import { MetaGoogleAds } from './layout/meta-google-ads/meta-google-ads';

export const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: LandingUi },
    { path: 'home', component: Home },
    { path: 'product', component: Product },
    { path: 'ad-campaign', component: AdCampaign },
    { path: 'vfx', component: MainLayout },
    { path: 'meta-google-ads', component: MetaGoogleAds },

    { path: '**', redirectTo: 'home' }
];
