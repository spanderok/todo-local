import { action, observable, makeObservable } from 'mobx';

export class ToDoService{

    @observable
    arrToDos: Array<{toDoTitle: string }> = [];

    @action
    addNewToDo (newToDoValue: string): void {
        this.arrToDos = [...this.arrToDos, {toDoTitle: newToDoValue}];
    };
}