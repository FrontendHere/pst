import {Phase} from '../../../../models/phase.entity';
import {Mnn} from '../../../../models/mnn.entity';
import {Employee} from '../../../../models/employee.entity';
import {GroupingType} from '@app/modules/conversations/models/types';

export interface GroupingFilter {
    grouping: GroupingType;
    phases: Phase[];
    liables: Employee[];
    mnns: Mnn[];
    leaders: Employee[];
    favorite: boolean;
}