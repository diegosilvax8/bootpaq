import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorPickerModule, ColorPickerService } from 'ngx-color-picker';
import { NgxSelectModule } from 'ngx-select-ex'
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ngx-custom-validators';
import { FileUploadModule } from 'ng2-file-upload';
import { ImageCropperModule } from 'ngx-img-cropper';

import { SharedModule } from '../../../shared/shared.module';
import { BaseComponent } from './base/base.component';

const routes: Routes = [
    { path: 'base', component: BaseComponent },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        NgxSelectModule,
        ColorPickerModule,
        TextMaskModule,
        CustomFormsModule,
        FileUploadModule,
        ImageCropperModule,
    ],
    providers: [ColorPickerService],
    declarations: [
        BaseComponent,
    ],
    exports: [
        RouterModule
    ]
})
export class ReportesModule { }
