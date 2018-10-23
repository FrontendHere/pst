import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConversationsCardsPageComponent} from './pages/conversations-cards-page/conversations-cards-page.component';
import {ConversationsListPageComponent} from './pages/conversations-list-page/conversations-list-page.component';
import {ConversationsCalendarPageComponent} from './pages/conversations-calendar-page/conversations-calendar-page.component';
import {ConversationCardPageComponent} from './pages/conversation-card-page/conversation-card-page.component';
import {ConversationsLayoutComponent} from './layouts/conversations-layout/conversations-layout.component';
import {ConversationsCardComponent} from './components/conversations-card/conversations-card.component';
import {ConversationsTopControlsComponent} from './components/conversations-top-controls/conversations-top-controls.component';
import {ConversationsMenuComponent} from './components/conversations-menu/conversations-menu.component';
import {ConverstaionsFilterModalComponent} from './modals/converstaions-filter-modal/converstaions-filter-modal.component';
import {AchievementOfIndicatorsComponent} from './components/achievement-of-indicators/achievement-of-indicators.component';
import {ConverstionsSidebarComponent} from './components/converstions-sidebar/converstions-sidebar.component';
import {ConversaionsCalendarDrugsComponent} from './pages/conversaions-calendar-drugs/conversaions-calendar-drugs.component';
import {EfficiencyComponent} from './components/efficiency/efficiency.component';
import {ConversationPanelBlockComponent} from './components/conversation-panel-block/conversation-panel-block.component';
import {ConversationsCalendarModeListComponent} from './components/conversations-calendar-mode-list/conversations-calendar-mode-list.component';
import {ConversationCardLayoutComponent} from './layouts/conversation-card-layout/conversation-card-layout.component';
import {ConversationsActionsComponent} from './components/conversations-actions/conversations-actions.component';
import {CardConversationLeftPanelComponent} from './components/card-conversation-left-panel/card-conversation-left-panel.component';
import {ConverationsCalendarMilestonesPageComponent} from './components/converations-calendar-milestones-page/converations-calendar-milestones-page.component';
import {MilestonesComponent} from './components/milestones/milestones.component';
import {ConversationsRouting} from './conversations.routing';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {SharedModule} from '../../shared/shared.module';
import {MatDialogModule, MatTableModule} from '@angular/material';
import {AccordionModule, DialogModule, ScheduleModule, TooltipModule} from 'primeng/primeng';
import { NewEventPageComponent } from './pages/new-event-page/new-event-page.component';
import { CardTopHeaderComponent } from './components/card-top-header/card-top-header.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import {DuplexProgressBarComponent} from './components/duplex-progress-bar/duplex-progress-bar.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';

import {ConversationsCalendarTestComponent} from './components/conversations-calendar-test/conversations-calendar-test.component';


@NgModule({
    imports: [
        CommonModule,
        ConversationsRouting,
        PerfectScrollbarModule,
        SharedModule,
        /*material modules*/
        MatTableModule,
        MatDialogModule,

        /*primeNG modules*/
        TooltipModule,
        DialogModule,
        AccordionModule,
        ScheduleModule
    ],
    declarations: [
        // page
        ConversationsCardsPageComponent,
        ConversationsListPageComponent,
        ConversationsCalendarPageComponent,
        ConversationCardPageComponent,

        // layouts
        ConversationsLayoutComponent,
        ConversationCardLayoutComponent,

        // components
        ConversationsMenuComponent,
        ConversationsTopControlsComponent,
        ConversationsCardComponent,
        ConversationsCalendarTestComponent,
        AchievementOfIndicatorsComponent,
        ConverstionsSidebarComponent,
        ConversaionsCalendarDrugsComponent,
        EfficiencyComponent,
        ConversationPanelBlockComponent,
        ConversationsCalendarModeListComponent,
        CardConversationLeftPanelComponent,
        ConversationsActionsComponent,
        MilestonesComponent,
        ConverationsCalendarMilestonesPageComponent,
        NewEventPageComponent,
        DuplexProgressBarComponent,
        // modals
        ConverstaionsFilterModalComponent,
        CardTopHeaderComponent,
        ProjectsPageComponent,
        TasksPageComponent
    ],
    entryComponents: [
        ConverstaionsFilterModalComponent
    ],
})
export class ConversationsModule {
}
