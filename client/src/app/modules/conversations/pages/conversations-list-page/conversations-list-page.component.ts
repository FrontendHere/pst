import { Component, OnInit } from '@angular/core';

import {MatTableDataSource} from '@angular/material';
import {IConversation, IConversationExt} from '../../../../shared/interfaces/conversation.interface';
import {IUser} from '../../../../shared/interfaces/user.interface';
import {ConversationsService} from '../../../../shared/services/conversations.service';
import {UsersService} from '../../../../shared/services/users.service';

@Component({
  selector: 'app-conversations-list-page',
  templateUrl: './conversations-list-page.component.html',
  styleUrls: ['./conversations-list-page.component.scss']
})
export class ConversationsListPageComponent implements OnInit {
    items: IConversationExt[];
    users: IUser[] = [];

    data: any;

    displayedColumns: string[] = ['actions', 'drugname', 'mhh', 'nozology', 'contractor', 'user'];
    columnsToDisplay: string[] = this.displayedColumns.slice();

    constructor(private _conversationsService: ConversationsService, private _usersService: UsersService) {

        this._usersService.getAll().subscribe(users => this.users = users);
        this._conversationsService.getConversationsAll().subscribe(items => this.items = items.map((i: IConversation) => <IConversationExt>{
            ...i,
            user: this.users.find( u => u.id === i.userId)
        }));
        this.data = new MatTableDataSource(this.items);
    }


    ngOnInit() {
    }

}
