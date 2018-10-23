import {Component, Input, OnInit} from '@angular/core';
import {IbtnNav} from '../../../../shared/interfaces/btn-nav.interface';


@Component({
  selector: 'app-conversation-card-layout',
  templateUrl: './conversation-card-layout.component.html',
  styleUrls: ['./conversation-card-layout.component.scss']
})
export class ConversationCardLayoutComponent implements OnInit {
    @Input() mode: number = 1;
    btnsNav: IbtnNav[] = [
        {
            routerLink: ['/', 'conversations' , 'card'],
            class: 'conversation-top-controls__link--active',
            tooltip: 'Показать результат',
            tooltipPosition: 'bottom',
            name: 'Результат'
        },
        {
            routerLink: ['/', 'conversations', 'list'],
            class: 'conversation-top-controls__link--active',
            tooltip: 'Показать календарь встреч',
            tooltipPosition: 'bottom',
            name: 'Календарь встреч'
        },
        {
            routerLink: ['/', 'conversations', 'calendar'],
            class: 'conversation-top-controls__link--active',
            tooltip: 'Показать вехи',
            tooltipPosition: 'bottom',
            name: 'Вехи'
        },
        {
            routerLink: ['/', 'conversations', 'projects'],
            class: 'conversation-top-controls__link--active',
            tooltip: 'Показать проекты',
            tooltipPosition: 'bottom',
            name: 'Проекты'
        },
        {
            routerLink: ['/', 'conversations', 'tasks'],
            class: 'conversation-top-controls__link--active',
            tooltip: 'Показать задачи',
            tooltipPosition: 'bottom',
            name: 'Задачи'
        },
        {
            routerLink: ['/', 'conversations', 'calendar'],
            class: 'conversation-top-controls__link--active',
            tooltip: 'Показать Участники',
            tooltipPosition: 'bottom',
            name: 'Участники'
        },
        {
            routerLink: ['/', 'conversations', 'calendar'],
            class: 'conversation-top-controls__link--active',
            tooltip: 'Показать Документы',
            tooltipPosition: 'bottom',
            name: 'Документы'
        },
        {
            routerLink: ['/', 'conversations', 'calendar'],
            class: 'conversation-top-controls__link--active',
            tooltip: 'Показать Показатели',
            tooltipPosition: 'bottom',
            name: 'Показатели'
        },
    ];

  constructor() { }

  ngOnInit() {
  }

}
