import { Medicine } from './medicine.entity';
import { Counterparty } from './counterparty.entity';
import { Conversation } from './conversation.entity';
export declare class Project {
    id: number;
    name: string;
    counterparty: Counterparty;
    medicine: Medicine;
    conversations?: Conversation[];
    created: Date;
    updated: Date;
}