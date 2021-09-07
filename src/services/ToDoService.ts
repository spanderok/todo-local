import { action, observable, makeObservable } from 'mobx';

type Todo = { title: string, isDone: boolean, id: number };

export class ToDoService{

    @observable
    arrToDos: Todo[] = [];
    

    @action
    addNewToDo (todo: Todo): void {
        this.arrToDos = [...this.arrToDos,todo];
    };
}