import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'calendar-utils/date-adapters/date-fns';
import {UiModule} from '@app/ui-elements/ui.module';
import {CalendarHeaderComponent} from '@app/shared/components/calendar/calendar-header/calendar-header.component';
import {CalendarComponent} from '@app/shared/components/calendar/calendar-component/calendar.component';
@NgModule({
    imports: [
        CommonModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
        UiModule
    ],
    declarations: [
        CalendarComponent,
        CalendarHeaderComponent,
    ],
    exports: [
        CalendarComponent
    ]
})
export class ExtendedCalendarModule {}
