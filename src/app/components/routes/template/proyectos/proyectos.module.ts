import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule as Ng2ChartsModule } from 'ng2-charts';

import { SharedModule } from '../../../shared/shared.module';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
    { path: 'projects', component: ProjectComponent },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        Ng2ChartsModule
    ],
    declarations: [
        ProjectComponent
    ],
    exports: [
        RouterModule
    ]
})
export class ProyectosModule { }
