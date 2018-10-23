import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRouting} from './app.routing';


import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule, MatTableModule} from '@angular/material';
import {AccordionModule, DialogModule, TooltipModule} from 'primeng/primeng';
import {ConversationsModule} from './modules/conversations/conversations.module';
import {ConversationsService} from './shared/services/conversations.service';
import {UsersService} from './shared/services/users.service';
import {ConversationPanelTaskService} from './shared/services/conversation-panel-task.service';
import {ConversationsFilterModalService} from './modules/conversations/modals/converstaions-filter-modal/conversations-filter-modal.service';
import {ConversationPanelMeetingService} from './shared/services/conversation-panel-meeting.service';
import {ConversationPanelEventsService} from './shared/services/conversation-panel-events.service';
import {NgSelectModule} from '@ng-select/ng-select';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    declarations: [
        AppComponent,
        // layouts
        // components
        ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        DialogModule,
        SharedModule,
        ConversationsModule,
        AppRouting
    ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        ConversationsService,
        UsersService,
        ConversationPanelTaskService,
        ConversationsFilterModalService,
        ConversationPanelMeetingService,
        ConversationPanelEventsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
