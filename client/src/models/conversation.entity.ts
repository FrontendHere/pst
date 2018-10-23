import { Medicine } from './medicine.entity';
import { InteractionScheme } from './interaction-scheme.entity';
import { Phase } from './phase.entity';
import { Employee } from './employee.entity';
import { Meeting } from './meeting.entity';
import { Document } from './document.entity';
import { Project } from './project.entity';
import { Milestone } from './milestone.entity';
import { Organization } from './organization.entity';
import { Indicator } from './indicator.entity';
import { ConversationType } from './conversation-type.entity';
import { Task } from "./task.entity";

export enum ConversationAccent {
    MEDICINE = 0,
    MNN,
    NOSOLOGY,
    COUNTERPARTY,
}

export class Conversation {
    id?: number;
    name?: string;
    //цель переговора
    accent: ConversationAccent;
    //Лекарство
    medicine?: Medicine;
    counterparties?: Organization[];
    interaction_schema?: InteractionScheme;
    phase?: Phase;
    marginality?: number;
    //контрагент
    conv_counterparty?: Organization;
    //ответственный
    conv_liable?: Employee;
    //лидер
    conv_leader?: Employee;
    //администратор
    conv_admin?: Employee;
    //показатели
    indicators?: Indicator[];
    //встречи
    meetings?: Meeting[];
    //ожидаемая дата регистрации
    expectedRegisterDate?: Date;
    //конкуренты
    competitors?: Organization[];
    description?: string;
    risks?: string[];
    //вехи
    milestones?: Milestone[];
    documents?: Document[];
    projects?: Project[];
    tasks?: Task[];
    conversation_type?: ConversationType;
    updated: Date;
    created: Date;
    archival?: boolean;
    favorite: boolean;
}
