import {RouterModule, Routes} from '@angular/router';
import {ConversationsCardsPageComponent} from './pages/conversations-cards-page/conversations-cards-page.component';
import {ConversationCardPageComponent} from './pages/conversation-card-page/conversation-card-page.component';
import {ConversationsListPageComponent} from './pages/conversations-list-page/conversations-list-page.component';
import {ConversationsCalendarPageComponent} from './pages/conversations-calendar-page/conversations-calendar-page.component';
import {ConversaionsCalendarDrugsComponent} from './pages/conversaions-calendar-drugs/conversaions-calendar-drugs.component';
import {NgModule} from '@angular/core';
import {NewEventPageComponent} from './pages/new-event-page/new-event-page.component';
import {ProjectsPageComponent} from './pages/projects-page/projects-page.component';
import {TasksPageComponent} from './pages/tasks-page/tasks-page.component';

import {ConversationsCalendarTestComponent} from './components/conversations-calendar-test/conversations-calendar-test.component';

const Routes: Routes = [
    {
        path: 'conversations',
        children: [
        {path: '', redirectTo: 'cards', pathMatch: 'full'},
        {path: 'cards', component: ConversationsCardsPageComponent},
        {path: 'card', component: ConversationCardPageComponent},
        {path: 'projects', component: ProjectsPageComponent},
        {path: 'tasks', component: TasksPageComponent},
        {path: 'new-event', component: NewEventPageComponent},
        {path: 'list', component: ConversationsListPageComponent},
        {path: 'calendar', component: ConversationsCalendarPageComponent},
        {path: 'calendardrugs', component: ConversaionsCalendarDrugsComponent},

        {path: 'calendar-test', component: ConversationsCalendarTestComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(Routes)],
    exports: [RouterModule]
})

export class ConversationsRouting {

}