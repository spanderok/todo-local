import { action, observable } from 'mobx';

export interface IToDoItem {
    arrToDos: Array<IToDoItem>;

}

export class ToDoService implements IToDoItem {

    @observable
    public arrToDos: Array<IToDoItem> = [];

    @action.bound
    public setNewToDo (newToDoValue: string): Array<IToDoItem> {
        const NewObjToDo = {
            value: '',
        };
        NewObjToDo.value = newToDoValue;
        return this.arrToDos.push(NewObjToDo);
    };

}