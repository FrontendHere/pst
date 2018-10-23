import { Component, Input, Output, EventEmitter } from '@angular/core';
import {DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';

@Component({
    selector: 'calendar-header',
    styleUrls: ['calendar-header.component.scss'],
    templateUrl: 'calendar-header.component.html',
    providers: [
        {
            provide: DateAdapter,
            useFactory: adapterFactory,
        }
    ]
})
export class CalendarHeaderComponent {

    views: any[] = [
        {
            title: 'Расписание',
            selected: true,
            perform: () => {
            }
        },
        {
            title: 'Месяц по дням',
            selected: false,
            perform: () => {
                this.viewChange.emit('month');
            }
        },
        {
            title: 'Месяц по неделям',
            selected: false,
            perform: () => {
                this.viewChange.emit('week');
            }
        },
    ];
    eventTypes: any[] = [
        {
            title: 'Вехи',
            selected: false,
            perform: () => {
                console.log('Вехи selected');
            }
        },
        {
            title: 'Встречи',
            selected: true,
            perform: () => {
                console.log('Встречи selected');
            }
        },
        {
            title: 'Задачи',
            selected: false,
            perform: () => {
                console.log('Задачи selected');
            }
        },
    ];

    @Input()
    view: string;

    @Input()
    viewDate: Date;

    @Input()
    locale: string = 'ru';

    @Output()
    viewChange: EventEmitter<string> = new EventEmitter();

    @Output()
    viewDateChange: EventEmitter<Date> = new EventEmitter();
}
