import {Component, OnInit} from '@angular/core';
import {IConversation, IConversationExt} from '../../../../shared/interfaces/conversation.interface';
import {IUser} from '../../../../shared/interfaces/user.interface';
import {ConversationsService} from '../../../../shared/services/conversations.service';
import {UsersService} from '../../../../shared/services/users.service';

@Component({
    selector: 'app-conversations-cards-page',
    templateUrl: './conversations-cards-page.component.html',
    styleUrls: ['./conversations-cards-page.component.scss']
})
export class ConversationsCardsPageComponent implements OnInit {

    items: IConversationExt[];
    users: IUser[] = [];
    mode: number = 1;

    constructor(
        private _conversationsService: ConversationsService,
        private _usersService: UsersService
    ) {
        this._usersService.getAll().subscribe(users => this.users = users);
        this._conversationsService.getConversationsAll().subscribe(items => this.items = items.map((i: IConversation) => <IConversationExt>{
            ...i,
            user: this.users.find(u => u.id === i.userId)
        }));
    }

    ngOnInit() {
    }

}
