import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeModule } from 'angular-tree-component';
import { AgmCoreModule } from '@agm/core';
import { NgxSelectModule } from 'ngx-select-ex'
import { FullCalendarModule } from '@fullcalendar/angular';

import { SharedModule } from '../../../shared/shared.module';

import { ConfiguracionComponent } from './configuracion/configuracion.component';

const routes: Routes = [
    { path: 'settings', component: ConfiguracionComponent },

];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        TreeModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBNs42Rt_CyxAqdbIBK0a5Ut83QiauESPA'
        }),
        NgxSelectModule,
        FullCalendarModule
    ],
    declarations: [
        ConfiguracionComponent
    ],
    exports: [
        RouterModule
    ]
})
export class CuentasModule { }

