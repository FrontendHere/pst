import {Injectable} from '@angular/core';
import {WebsocketService} from '@app/core/websocket';
import {BaseService} from '@app/modules/conversations/services/base.service';
import {Medicine} from '../../../../models/medicine.entity';
import {WS} from '@app/modules/conversations/services/ws.api';


@Injectable()
export class MedicineService extends BaseService<Medicine> {

    public data: Medicine[] = [];
    protected mock: boolean = true;

    constructor(protected ws: WebsocketService) {
        super(ws);
        this.wsCRUDPath = WS.conversation.medicine;
    }

}
