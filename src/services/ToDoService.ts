import { action, observable, makeAutoObservable } from 'mobx';

export type Todo = { title: string, isDone: boolean, id: number };
export class ToDoService{

    constructor() {
        makeAutoObservable(this)
    }

    @observable
    arrToDos: Todo[] = [];
    
    @action
    addNewToDo ({title}: Pick<Todo, "title">): void {
        this.arrToDos = [...this.arrToDos,{title, isDone: false, id: new Date().valueOf()}];
        console.log(this.arrToDos)
    };
    @action
    completeTodo (id): void {
        const todo = this.arrToDos.find(todo => todo.id === id)
        if(!todo)return;
        todo.isDone = !todo.isDone
    };
    @action
    deteTodo (id): void {
        this.arrToDos = this.arrToDos.filter( todo => todo.id !== id);
    };
}