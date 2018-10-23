import { Component, OnInit } from '@angular/core';
import {IConversationPanelTask} from '../../../../shared/interfaces/conversation-panel-task.interface';
import {IConversationsPanelMeetings} from '../../../../shared/interfaces/conversations-panel-meetings';
import {ConversationPanelTaskService} from '../../../../shared/services/conversation-panel-task.service';
import {ConversationPanelMeetingService} from '../../../../shared/services/conversation-panel-meeting.service';
import {ConversationPanelEventsService} from '../../../../shared/services/conversation-panel-events.service';


@Component({
  selector: 'app-converstions-sidebar',
  templateUrl: './converstions-sidebar.component.html',
  styleUrls: ['./converstions-sidebar.component.scss']
})
export class ConverstionsSidebarComponent implements OnInit {
    isfilterAllBtn = true;
    isfilterSelectedBtn = false;

    items: IConversationPanelTask[];
    meetings: IConversationsPanelMeetings[];
    events: IConversationsPanelMeetings[];

    constructor(
        private _conversationPanelTaskService: ConversationPanelTaskService,
        private _conversationPanelMeetingService: ConversationPanelMeetingService,
        private _conversationPanelEventsService: ConversationPanelEventsService
    ) {
        this._conversationPanelTaskService.getAll().subscribe(items => this.items = items);
        this._conversationPanelMeetingService.getAll().subscribe(meetings => this.meetings = meetings);
        this._conversationPanelEventsService.getAll().subscribe(events => this.events = events);
    }

    ngOnInit() {
    }

    clickFilterBtn(e) {
        if (e.target.classList.length === 2) {
            return;
        }
        this.isfilterAllBtn = this.isfilterAllBtn !== true;
        this.isfilterSelectedBtn = this.isfilterSelectedBtn !== true;
    }

}
