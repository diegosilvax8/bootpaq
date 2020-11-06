import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

import { HomeComponent } from './home/home.component'

const routes: Routes = [
    { path: '', redirectTo: 'home' },
    { path: 'home', component: HomeComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        RouterModule
    ]
})
export class HomeModule { }
