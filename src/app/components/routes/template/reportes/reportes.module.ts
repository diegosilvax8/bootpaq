import { NgModule } from '@angular/core';
import { ReportesComponent } from './reportes/reportes.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: ReportesComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [ReportesComponent],
    exports: [
        RouterModule
    ]
})
export class ReportesModule { }