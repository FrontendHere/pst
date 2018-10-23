import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-conversation-panel-block',
  templateUrl: './conversation-panel-block.component.html',
  styleUrls: ['./conversation-panel-block.component.scss']
})
export class ConversationPanelBlockComponent implements OnInit {
    @Input() items: any;
    @Input() tpl: TemplateRef<any>;
    @Input() headerText: string;
    @Input() footerText: string;

    limiter: number = 3;
    otherItemsCount: number = 0;


    constructor() { }

    ngOnInit() {
        this.otherItemsCount = this.items.length - this.limiter;
    }

    toggle() {
        console.log("test");
        this.limiter = this.limiter === 3 ? this.items.length : 3;
        this.otherItemsCount = this.items.length - this.limiter;
    }

}
