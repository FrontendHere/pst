import { Injectable } from '@angular/core';
import { WebsocketService } from '@app/core/websocket';
import {BaseService} from '@app/modules/conversations/services/base.service';
import {Dictionary} from '../../../../models/dictionary.entity';
import {WS} from '@app/modules/conversations/services/ws.api';


@Injectable()
export class DictionaryService extends BaseService<Dictionary> {

  public data: Dictionary[] = [];
  protected mock: boolean = true;

  constructor(protected ws: WebsocketService) {
    super(ws);
    this.wsCRUDPath = WS.conversation.medicine;
  }



}
