import { NgModule } from '@angular/core';
import { VariedadesComponent } from './variedades/variedades.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: VariedadesComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [VariedadesComponent],
    exports: [
        RouterModule
    ]
})
export class VariedadesModule { }