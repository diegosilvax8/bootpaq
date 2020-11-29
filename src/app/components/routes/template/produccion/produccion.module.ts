import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxSelectModule } from 'ngx-select-ex'

import { SharedModule } from '../../../shared/shared.module';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
    { path: 'products', component: ProductsComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        NgxSelectModule
    ],
    declarations: [
        ProductsComponent
    ],
    exports: [
        RouterModule
    ]
})
export class ProduccionModule { }