import {GroupingType} from '@app/modules/conversations/models/types';


export interface GetFilterGroupingConversations {
    groupingType: GroupingType;
    phases: number[];
    liables: number[];
    mnns: number[];
    leaders: number[];
    favorite: boolean;
}
