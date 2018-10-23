import { WebsocketService } from '@app/core/websocket';
import { Observable } from 'rxjs';

interface CRUDOperations {
  add: string;
  edit: string;
  delete: string;
  get: string;
}

export abstract class BaseService<T> {

  public subscriptions: { [key: string]: Observable<any> };
  public wsCRUDPath: CRUDOperations;
  protected mock: boolean = false;
  protected data: T[];

  constructor(protected ws: WebsocketService) {
    this.subscriptions[this.constructor.name] = ws.on(this.wsCRUDPath.get);
    this.ws.send(this.wsCRUDPath.get, this.mock);
    this.subscriptions[this.constructor.name].subscribe(data => this.data = data);
  }

  get(item: T) {
    this.ws.send(this.wsCRUDPath.get, this.mock);
  }

  add(item: T) {
    this.ws.send(this.wsCRUDPath.add, item);
  }

  edit(item: T) {
    this.ws.send(this.wsCRUDPath.edit, item);
  }

  delete(item: T) {
    this.ws.send(this.wsCRUDPath.delete, item);
  }

}
