import { NgModule } from '@angular/core';
import { CamposComponent } from './campos/campos.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: CamposComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CamposComponent],
    exports: [
        RouterModule
    ]
})
export class CamposModule { }