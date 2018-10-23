import {Component, OnDestroy, OnInit} from '@angular/core';
import {ConversationsFilterModalService} from './conversations-filter-modal.service';

@Component({
  selector: 'app-converstaions-filter-modal',
  templateUrl: './converstaions-filter-modal.component.html',
  styleUrls: ['./converstaions-filter-modal.component.scss']
})
export class ConverstaionsFilterModalComponent implements OnInit, OnDestroy {
    visible: boolean = false;


    constructor(private _conversationsFilterModalService: ConversationsFilterModalService) { }

    show() {
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }

    ngOnInit() {
        this._conversationsFilterModalService.bindComponent(this);
    }

    ngOnDestroy() {
        this._conversationsFilterModalService.removeComponent();
    }


}
