import { NgModule } from '@angular/core';
import { ProcedimientosComponent } from './procedimientos/procedimientos.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: ProcedimientosComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [ProcedimientosComponent],
    exports: [
        RouterModule
    ]
})
export class ProcedimientosModule { }