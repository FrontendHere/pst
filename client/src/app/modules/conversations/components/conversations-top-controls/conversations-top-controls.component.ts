import {Component, Input, OnInit} from '@angular/core';
import {ConversationsFilterModalService} from '../../modals/converstaions-filter-modal/conversations-filter-modal.service';
import {IbtnNav} from '../../../../shared/interfaces/btn-nav.interface';


@Component({
    selector: 'app-conversations-top-controls',
    templateUrl: './conversations-top-controls.component.html',
    styleUrls: ['./conversations-top-controls.component.scss']
})
export class ConversationsTopControlsComponent implements OnInit {
    @Input() isNeedFilter: boolean = false;
    @Input() btnsNav: IbtnNav[];

    constructor(private conversationsFilterModalService: ConversationsFilterModalService) {
    }

    ngOnInit() {
    }

    openDialog() {
        this.conversationsFilterModalService.show();
    }

}
