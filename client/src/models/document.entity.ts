import {Meeting} from './meeting.entity';
import {Conversation} from "./conversation.entity";

export declare class Document {
    id: number;
    name: string;
    date: Date;
    conversations?: Conversation[];
    meetings?: Meeting[];
}
