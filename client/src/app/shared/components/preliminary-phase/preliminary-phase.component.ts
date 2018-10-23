import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-preliminary-phase',
  templateUrl: './preliminary-phase.component.html',
  styleUrls: ['./preliminary-phase.component.scss']
})
export class PreliminaryPhaseComponent implements OnInit {
    @Input() phaseId: number;
    @Input() needShort: false;

    phase: any;
    phases = [
        {
            id: 1,
            text: 'Предварительная фаза',
            class: 'previous'
        },
        {
            id: 2,
            text: 'Изменения условий',
            class: 'changes'
        },
        {
            id: 3,
            text: 'Согласование',
            class: 'agreement'
        }
    ];



    constructor() { }

    ngOnInit() {
        this.phase = this.phases.find( ph => ph.id === this.phaseId);
    }

}
