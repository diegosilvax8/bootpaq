import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BaseComponent implements OnInit {
    // Color Picker
    colorDemo1 = '#555555';
    colorDemo2 = '#555555';
    colorDemo3 = '#555555';
    colorDemo4 = '#555555';

    // ng2Select
    public items: Array<string> = ['Proyecto 1', 'Proyecto 2', 'Proyecto 3', 'Proyecto 4',
        'Proyecto 5'];

    public value: any = {};
    public _disabledV: string = '0';
    public disabled: boolean = false;

    // Datepicker
    bsValue = new Date();
    bsRangeValue: Date[];
    maxDate = new Date();
    bsConfig = {
        containerClass: 'theme-angle'
    }
    // Time picker
    mytime: Date = new Date();

    public get disabledV(): string {
        return this._disabledV;
    }

    public set disabledV(value: string) {
        this._disabledV = value;
        this.disabled = this._disabledV === '1';
    }

    public selected(value: any): void {
        console.log('Selected value is: ', value);
    }

    public removed(value: any): void {
        console.log('Removed value is: ', value);
    }

    public typed(value: any): void {
        console.log('New search input: ', value);
    }

    public refreshValue(value: any): void {
        this.value = value;
    }

    // TextMask
    public myModel: string;
    public modelWithValue: string;
    public formControlInput: FormControl = new FormControl();
    public mask: Array<string | RegExp>;

    constructor() {
        this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.myModel = '';
        this.modelWithValue = '5554441234';
        this.formControlInput.setValue('5555551234');
        // Datepicker
        this.maxDate.setDate(this.maxDate.getDate() + 7);
        this.bsRangeValue = [this.bsValue, this.maxDate];
    }

    ngOnInit() {
    }

}
