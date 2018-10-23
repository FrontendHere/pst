import { Injectable } from '@angular/core';
import {IConversation} from '../interfaces/conversation.interface';
import conversations from '../demodata/conversations';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversationsService {

    conversations: IConversation[] = conversations;

    constructor() { }

    getConversationsAll(): Observable<IConversation[]> {
        return of(this.conversations);
    }
}
