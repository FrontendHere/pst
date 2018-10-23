import {Component, Input, OnInit} from '@angular/core';
import {IConversationExt} from '../../../../shared/interfaces/conversation.interface';
import {Router} from "@angular/router";


@Component({
  selector: 'app-conversations-card',
  templateUrl: './conversations-card.component.html',
  styleUrls: ['./conversations-card.component.scss']
})
export class ConversationsCardComponent implements OnInit {
    @Input() item = {} as IConversationExt;
    selected = false;

    constructor(
        private _router: Router

    ) { }

    ngOnInit() {
    }

    selectItem(id: number) {
        this.selected = !this.selected;
    }

    handleCreate(typeAction: string): void {
        if(!!typeAction === false) {
            return;
        }

        switch (typeAction) {
            case "open-card":
                this._router.navigate(['/', 'conversations', 'card']);
                break;
            case "conversation":
                break;
            case "meeting":
                break;
            case "task":
                break;
            case "attachment":
                break;
            case "report":
                break;
        }
    }

}
