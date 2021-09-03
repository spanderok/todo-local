import { action, observable } from 'mobx';

export interface IToDoItem {
    id: string;
    content: string;
    completed: boolean;
}

export class ToDoService {

    @observable puublic readonly value: IToDoItem;

}