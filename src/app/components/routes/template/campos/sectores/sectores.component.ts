import { Component, OnInit } from '@angular/core';
declare var $: any;

const swal = require('sweetalert');

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
    selector: 'app-sectores',
    templateUrl: './sectores.component.html',
    styleUrls: ['./sectores.component.scss']
})
export class SectoresComponent implements OnInit {

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

    sweetalertDemo1() {
        swal('Here\'s a message');
    }

    sweetalertDemo2() {
        swal('Here\'s a message!', 'It\'s pretty, isn\'t it?');
    }

    sweetalertDemo3() {
        swal("Good job!", "You clicked the button!", "success");
    }

    sweetalertDemo4() {
        swal({
            title: 'Are you sure?',
            text: 'Your will not be able to recover this imaginary file!',
            icon: 'warning',
            buttons: {
                cancel: true,
                confirm: {
                    text: 'Yes, delete it!',
                    value: true,
                    visible: true,
                    className: "bg-danger",
                    closeModal: true
                }
            }
        }).then(() => {
            swal('Booyah!');
        });
    }

    sweetalertDemo5() {
        swal({
            title: 'Estás seguro?',
            text: 'El Ítem será eliminado del sistema',
            icon: 'warning',
            buttons: {
                cancel: {
                    text: 'No, cancelar por favor!',
                    value: null,
                    visible: true,
                    className: "",
                    closeModal: false
                },
                confirm: {
                    text: 'Si, borrar!',
                    value: true,
                    visible: true,
                    className: "bg-danger",
                    closeModal: false
                }
            }
        }).then((isConfirm) => {
            if (isConfirm) {
                swal('Borrado!', 'El Ítem ha sido eliminado.', 'success');
            } else {
                swal('Cancelado', 'El Ítem no se ha eliminado :)', 'error');
            }
        });
    }

    sweetalertDemo6() {
        swal({
            title: 'Sweet!',
            text: 'Here\'s a custom image.',
            icon: 'assets/img/user/01.jpg'
        });
    }

}
