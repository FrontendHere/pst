import {Injectable} from '@angular/core';


import {ConverstaionsFilterModalComponent} from './converstaions-filter-modal.component';

@Injectable()
export class ConversationsFilterModalService {

    private _bindedComponent: ConverstaionsFilterModalComponent;
    taskId: number;
    //data: IDiffHistoryItem[] = [];

    constructor() {
    }

    bindComponent(component) {
        this._bindedComponent = component;
    }

    removeComponent() {
        this._bindedComponent = null;
    }

    show() {
        this._bindedComponent.show();
    }

   /* editInfo(e: IActualInfo.IActualInfoResponse) {
        this.taskActualInfoService.updateInfo(e);
    }

    addInfo(e: IActualInfo.IActualInfoResponse) {
        this.taskActualInfoService.addInfo(this.taskId, e);
    }

    deleteInfo(id: number) {
        this.taskActualInfoService.deleteInfo(id);
    }*/

    clearData() {
        //this.data = [];
    }

 }

