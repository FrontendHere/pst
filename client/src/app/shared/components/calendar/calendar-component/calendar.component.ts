import {Component, Input} from '@angular/core';
import {Subject} from 'rxjs/index';
import {CalendarDateFormatter} from 'angular-calendar';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import {RuDateFormatter} from '@app/shared/components/calendar/ru-date-formater.provider';

export interface CalendarMonthViewDayExtended extends CalendarMonthViewDay {
    active: boolean;
}

@Component({
    selector: 'calendar-component',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    providers: [
        {
            provide: CalendarDateFormatter,
            useClass: RuDateFormatter
        }
    ]
})
export class CalendarComponent {
    @Input() events: any[];
    @Input() viewDate: Date = new Date();
    @Input() view: string = 'month';
    @Input() locale: string = 'ru';
    private refresh: Subject<any> = new Subject();
    private selectedDay: {day: CalendarMonthViewDayExtended};

    constructor() {}

    private cellActions = {
        highlight: (cell: CalendarMonthViewDayExtended) => {
            if (this.selectedDay && this.selectedDay.day.date.getTime() === cell.date.getTime()) {
                cell.backgroundColor = 'enable highlight';
            } else {
                cell.backgroundColor = null;
            }
        },
        group: (cell: CalendarMonthViewDayExtended) => {
            const groups: any = {};
            cell.events.forEach((event: CalendarEvent<{ type: string }>) => {
                groups[event.meta.type] = groups[event.meta.type] || [];
                groups[event.meta.type].push(event);
            });
            cell['eventGroups'] = Object.entries(groups);
        },
    }

    beforeMonthViewRender({ body }: { body: CalendarMonthViewDayExtended[] }): void {
        body.forEach((cell: CalendarMonthViewDayExtended) => {
            Object.keys(this.cellActions).forEach((key: string) => {
                const action = this.cellActions[key];
                action(cell);
            });
        });
    }

    handleDayClicked(cell: any) {
        this.selectedDay = cell;
        this.refresh.next();
    }
}
