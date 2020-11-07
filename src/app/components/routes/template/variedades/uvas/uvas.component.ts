import { Component, OnInit } from '@angular/core';
declare var $: any;

// Tooltips fix for summernote
// https://github.com/Financial-Times/polyfill-library/issues/164#issuecomment-486977672
const origToString = Object.prototype.toString;
Object.prototype.toString = function() {
    'use strict';
    if (this === null) return '[object Null]';
    return origToString.call(this);
};
// End Tooltips fix for summernote

@Component({
    selector: 'app-uvas',
    templateUrl: './uvas.component.html',
    styleUrls: ['./uvas.component.scss']
})
export class UvasComponent implements OnInit {

    public itemsCategories: Array<string> = ['coding', 'less', 'sass', 'angularjs', 'node', 'expressJS'];
    public itemsTags: Array<string> = ['JAVASCRIPT', 'WEB', 'BOOTSTRAP', 'SERVER', 'HTML5', 'CSS'];
    public itemsReview = [
        'Adam <adam@email.com>',
        'Amalie <amalie@email.com>',
        'Wladimir <wladimir@email.com>',
        'Samantha <samantha@email.com>',
        'Estefanía <estefanía@email.com>',
        'Natasha <natasha@email.com>',
        'Nicole <nicole@email.com>',
        'Adrian <adrian@email.com>'
    ];
    valueCategory;
    valueTag;
    valueReview;
    contents: string;

    constructor() { }

    ngOnInit() {
        // Summernote is currently not ported as a native angular2 module
        // For a quick use it we use the component a wrapper
        // Plugin events can be used to keep component props
        // in sync with the editor content
        $('#summernote').summernote({
            height: 280,
            dialogsInBody: true,
            callbacks: {
                onChange: (contents, $editable) => {
                    this.contents = contents;
                    // console.log(contents);
                }
            }
        });

        // Hide the initial popovers that display
        $('.note-popover').css({
            'display': 'none'
        });

    }

}