import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxSelectModule } from 'ngx-select-ex'

import { SharedModule } from '../../../shared/shared.module';
import { PasosComponent } from './pasos/pasos.component';

const routes: Routes = [
    { path: 'pasos', component: PasosComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        NgxSelectModule
    ],
    declarations: [
        PasosComponent
    ],
    exports: [
        RouterModule
    ]
})
export class ProcedimientosModule { }
