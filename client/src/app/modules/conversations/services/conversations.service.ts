import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import conversationsMock from '@app/mockups/conversationsMock';
import {UpdateFavoriteConversations} from '@app/modules/conversations/DTO/comands/update-favorite-conversations';
import {GetFilterGroupingConversations} from '@app/modules/conversations/DTO/queries/get-filter-grouping-conversations';
import {ConversationsGrouping, getAllConversations} from '@app/modules/conversations/models/conversations-grouping';
import {getConversationPropByGrouping, getGroupingConversation, groupingMock} from '@app/mockups/serverMocks';
import {Conversation} from "../../../../models/conversation.entity";

@Injectable()
export class ConversationsService {

    private groupingFilterQuery: GetFilterGroupingConversations;
    private _conversations = new BehaviorSubject<ConversationsGrouping>({
        groupingType: 'leader',
        dictionaries: {['']: conversationsMock}
    });

    get conversations$(): Observable<ConversationsGrouping> {
        return this._conversations;
    }

    private _selectedConvs$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
    private _selectedConvs: number[] = [];


    constructor() {
    }

    get selectedConvs$(): Observable<number[]> {
        return this._selectedConvs$;
    }

    selectConv(convId: number): void {
        const index: number = this._selectedConvs.indexOf(convId);
        if (index >= 0) {
            this._selectedConvs.splice(index, 1);
            return this._selectedConvs$.next(this._selectedConvs);
        }
        this._selectedConvs.push(convId);
        return this._selectedConvs$.next(this._selectedConvs);
    }

    getConversation(id: number): Observable<Conversation> {
        const conversation: Conversation = getAllConversations(this._conversations.getValue()).find(i => i.id === id);

        if (conversation !== undefined) {
            return of(conversation);
        }

        // запрос в API
        return;
    }


    load(groupingFilterQuery: GetFilterGroupingConversations): void {
        const prop = getConversationPropByGrouping(groupingFilterQuery.groupingType);
        const mock: ConversationsGrouping = {
            groupingType: groupingFilterQuery.groupingType,
            dictionaries: groupingMock(getGroupingConversation(groupingFilterQuery.groupingType, conversationsMock), conversationsMock, prop)
        };
        this.groupingFilterQuery = groupingFilterQuery;
        this._conversations.next(mock);
    }

    loadByLastFilter(): void {
        const leader = JSON.stringify(conversationsMock[0].medicine);
        if (!this.groupingFilterQuery) {
            const mock: ConversationsGrouping = {
                groupingType: 'none',
                dictionaries: {[leader]: conversationsMock}
            };
            this._conversations.next(mock);
        } else {
            const prop = getConversationPropByGrouping(this.groupingFilterQuery.groupingType);
            const mock: ConversationsGrouping = {
                groupingType: this.groupingFilterQuery.groupingType,
                dictionaries: groupingMock(getGroupingConversation(this.groupingFilterQuery.groupingType, conversationsMock), conversationsMock, prop)
            };
            this._conversations.next(mock);
        }
    }

    updateFavorite(command: UpdateFavoriteConversations): Observable<boolean> {
        //api request
        return of(command.status);
    }

}
