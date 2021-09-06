import { action, observable, makeObservable } from 'mobx';

export interface IToDoItem {
    value: string;

}

export interface IToDoService {
    arrToDos: Array<IToDoItem>;

    setNewToDo(newToDoValue: string)
}

export class ToDoService implements IToDoService {
    constructor() {
        makeObservable(this)
    }

    @observable
    public arrToDos: Array<IToDoItem> = [];

    @action.bound
    public setNewToDo (newToDoValue: string): void {
        this.arrToDos = [...this.arrToDos, {value: newToDoValue}];
    };
}