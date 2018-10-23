import { User } from './user.entity';
import { Employee } from './employee.entity';
import { MarketParticipant } from './market-participant.entity';

export enum TaskStatuses {
    PLANNED = 0,
    IN_WORK,
    HOLD,
    COMPLETE,
    STOP,
}

export enum TaskPriorities {
    LOW = 0,
    MIDDLE,
    HIGHT
}

export declare class Task {
    id: number;
    name: string;
    prority: TaskPriorities;
    status: TaskStatuses;
    deadline: Date;
    taskEmitter: User;
    taskEExecutor: Employee;
    taskMPExecutor: MarketParticipant;
    taskLiable: Employee;
    controllers: User[];
}
