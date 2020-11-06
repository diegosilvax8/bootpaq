import { NgModule } from '@angular/core';
import { ProduccionComponent } from './produccion/produccion.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: ProduccionComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [ProduccionComponent],
    exports: [
        RouterModule
    ]
})
export class ProduccionModule { }