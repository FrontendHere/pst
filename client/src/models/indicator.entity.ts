import { Meeting } from './meeting.entity';
export declare class Indicator {
    id: number;
    conversationId: number;
    meetingId: Meeting;
    values: ICommercialIndicatorValues;
    updated: Date;
    created: Date;
    archival?: boolean;
}

export interface ICommercialIndicatorValues {
    external: any;
    internal: any;
    reached?: boolean;
}
