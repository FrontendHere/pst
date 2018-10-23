import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {IConversation} from '../interfaces/conversation.interface';
import {IConversationPanelTask} from '../interfaces/conversation-panel-task.interface';
import conversationsPanelTasks from '../demodata/consersations-panel-tasks';

@Injectable({
  providedIn: 'root'
})
export class ConversationPanelTaskService {

    tasks: IConversationPanelTask[] = conversationsPanelTasks;

    constructor() { }

    getAll(): Observable<IConversationPanelTask[]> {
        return of(this.tasks);
    }
}
