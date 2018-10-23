import { Mnn } from './mnn.entity';
import { Nosologie } from './nosologie.entity';
export declare class Medicine {
    id?: number;
    name: string;
    mnn: Mnn;
    nosology: Nosologie;
}
