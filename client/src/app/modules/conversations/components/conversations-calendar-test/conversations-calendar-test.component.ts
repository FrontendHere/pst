import {Component, Input, OnInit} from '@angular/core';
import {IConversationExt} from '../../../../shared/interfaces/conversation.interface';
import {Router} from "@angular/router";


@Component({
  selector: 'app-conversations-calendar-test',
  templateUrl: './conversations-calendar-test.component.html',
  styleUrls: ['./conversations-calendar-test.component.scss']
})
export class ConversationsCalendarTestComponent implements OnInit {
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
            case "open-calendar-test":
                this._router.navigate(['/', 'conversations', 'calendar-test']);
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
