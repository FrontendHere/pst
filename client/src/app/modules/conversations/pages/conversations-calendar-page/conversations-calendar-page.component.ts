import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-conversations-calendar-page',
    templateUrl: './conversations-calendar-page.component.html',
    styleUrls: ['./conversations-calendar-page.component.scss']
})
export class ConversationsCalendarPageComponent implements OnInit {
    events: any[];

    constructor() {
    }

    ngOnInit() {
        this.events = [
            {
                'title': 'All Day Event',
                'start': '2018-09-15'
            },
            {
                'title': 'Long Event',
                'start': '2018-09-17'
            },
            {
                'title': 'Repeating Event',
                'start': '2018-09-14'
            },
            {
                'title': 'Repeating Event',
                'start': '2018-09-10'
            },
            {
                'title': 'Conference',
                'start': '2018-09-11',
                'end': '2018-09-14'
            }
        ];
    }

}
