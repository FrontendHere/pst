import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainNavComponent} from './components/main-nav/main-nav.component';
import {HeaderComponent} from './components/header/header.component';
import {PersonComponent} from './components/person/person.component';
import {PreliminaryPhaseComponent} from './components/preliminary-phase/preliminary-phase.component';
import {ShareLayoutComponent} from './layouts/share-layout/share-layout.component';
import {PriorityBtnComponent} from './components/priority-btn/priority-btn.component';
import {MatDialogModule, MatTableModule} from '@angular/material';
import {AccordionModule, DialogModule, TooltipModule} from 'primeng/primeng';
import {AppModule} from '../app.module';
import {RouterModule} from '@angular/router';
import {AddLineBreakPipe} from './pipes/add-line-break.pipe';
import {MomentPipe} from './pipes/moment.pipe';
import {FilterByPipe} from './pipes/filter-by.pipe';
import {NumeralPipe} from './pipes/numeral.pipe';
import {OrderByPipe} from './pipes/order-by.pipe';
import {OverflowDotsPipe} from './pipes/overflow-dots.pipe';
import {AppRouting} from '../app.routing';
import {NgSelectModule} from '@ng-select/ng-select';

const corePipes = [
    FilterByPipe,
    MomentPipe,
    NumeralPipe,
    OrderByPipe,
    OverflowDotsPipe,
    AddLineBreakPipe,
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgSelectModule
    ],
    exports: [
        ShareLayoutComponent,
        HeaderComponent,
        MainNavComponent,
        PersonComponent,
        PreliminaryPhaseComponent,
        PriorityBtnComponent,
        ...corePipes,
        NgSelectModule
    ],
    declarations: [
        // components
        HeaderComponent,
        MainNavComponent,
        PersonComponent,
        PreliminaryPhaseComponent,
        PriorityBtnComponent,
        // layouts
        ShareLayoutComponent,

        // pipes
        ...corePipes

    ]
})
export class SharedModule {
}
