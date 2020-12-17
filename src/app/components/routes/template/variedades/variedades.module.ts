import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxSelectModule } from 'ngx-select-ex'
import { TreeModule } from 'angular-tree-component';
import { DndModule } from 'ng2-dnd';

import { SharedModule } from '../../../shared/shared.module';
import { UvasComponent } from './uvas/uvas.component';


const routes: Routes = [
    { path: 'uvas', component: UvasComponent },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        NgxSelectModule,
        TreeModule.forRoot(),
        DndModule.forRoot(),
    ],
    declarations: [
        UvasComponent
    ],
    exports: [
        RouterModule
    ]
})
export class VariedadesModule { }
