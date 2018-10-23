import {Component, OnInit} from '@angular/core';
import {IbtnNav} from '../../../../shared/interfaces/btn-nav.interface';


@Component({
    selector: 'app-conversations-layout',
    templateUrl: './conversations-layout.component.html',
    styleUrls: ['./conversations-layout.component.scss']
})
export class ConversationsLayoutComponent implements OnInit {
    btnsNav: IbtnNav[] = [
        {
            routerLink: ['/', 'conversations', 'cards'],
            class: 'conversation-top-controls__link--active',
            tooltip: 'Показать выбранные переговоры как карточки',
            tooltipPosition: 'bottom',
            name: 'Карточки'
        },
        {
            routerLink: ['/', 'conversations', 'list'],
            class: 'conversation-top-controls__link--active',
            tooltip: 'Показать выбранные переговоры в списке',
            tooltipPosition: 'bottom',
            name: 'Список'
        },
        {
            routerLink: ['/', 'conversations', 'calendar'],
            class: 'conversation-top-controls__link--active',
            tooltip: 'Показать выбранные переговоры в календаре',
            tooltipPosition: 'bottom',
            name: 'Календарь'
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
