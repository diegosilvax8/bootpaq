import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

    favContact1 = false;
    favContact2 = true;
    favContact3 = false;
    favContact4 = false;
    favContact5 = true;
    favContact6 = true;
    favContact7 = false;
    favContact8 = false;
    favContact9 = false;

    constructor() { }

    ngOnInit() {
    }

}
