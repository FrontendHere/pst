import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../../../models/employee.entity';
import {Organization} from "../../../../models/organization.entity";


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
    @Input() user: Employee;
    @Input() org: Organization;
    @Input() needPosition: boolean = false;
    @Input() bolderName: boolean = false;
    @Input() public direction: 'ltr' | 'rtl' = 'ltr';

    public employee: Employee;

    constructor() { }


    ngOnInit() {
        if (this.user === undefined && this.org == undefined) {
            return;
        } else if (this.user !== undefined ) {
            this.employee = this.user;
        } else {

            this.employee = {
                name: this.org.name,
                photo: this.org.photo,
                position: ""
            }
        }
    }

}
