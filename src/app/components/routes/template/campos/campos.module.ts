import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxSelectModule } from 'ngx-select-ex'

import { SharedModule } from '../../../shared/shared.module';
import { SectoresComponent } from './sectores/sectores.component';

const routes: Routes = [
    { path: 'sectores', component: SectoresComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        NgxSelectModule
    ],
    declarations: [
        SectoresComponent
    ],
    exports: [
        RouterModule
    ]
})
export class CamposModule { }