import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../interfaces/user.interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
    @Input() user = {} as IUser;
    @Input() needPosition: boolean = false;

    constructor() { }

    ngOnInit() {
    }

}
