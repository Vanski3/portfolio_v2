import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ImprintComponent } from './main-page/imprint/imprint.component';
import { PrivacyComponent } from './main-page/privacy/privacy.component';

export const routes: Routes = [

    { path: '', component: MainPageComponent },
    { path: 'imprint', component:  ImprintComponent},
    { path: 'privacy', component: PrivacyComponent },
];
