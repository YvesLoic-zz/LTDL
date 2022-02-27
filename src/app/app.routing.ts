import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminLayoutRoutes } from './layouts/admin-layout/admin-layout.routing';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    }, {
        path: 'dashboard',
        component: AdminLayoutComponent,
        children: [{
            path: '',
            loadChildren: () => import('./layouts/admin-layout/admin-layout.module')
                .then(m => m.AdminLayoutModule),
            // children: AdminLayoutRoutes
        }]
    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    exports: [],
})
export class AppRoutingModule {
}
