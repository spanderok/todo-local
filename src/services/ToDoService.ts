import { Store } from './../store/store';
import { action, observable, makeAutoObservable } from 'mobx';

export type Todo = { title: string, isDone: boolean, id: number };
export class ToDoService{
    store: Store<Array<Todo>> = new Store();

    constructor() {
        makeAutoObservable(this)
    }

    @observable
    arrToDo: Todo[] = [];

    @action
    load() {
        const todos: Array<Todo> = this.store.get("TODO");
        this.arrToDo = todos;
    }

    @action
    save() {
        this.store.set("TODO", this.arrToDo);
    }
    
    @action
    addNewToDo ({title}: Pick<Todo, "title">): void {
        const todo = this.arrToDo.some(todo => todo.title === title)
        if(todo) {
            window.alert('Такая задача уже существует')
            return
        }
        if (title === "") {
            window.alert('Введите текст задачи')
            return
        }
        this.arrToDo = [...this.arrToDo,{title, isDone: false, id: new Date().valueOf()}];

    }
    @action
    completeTodo (todo: Todo): void {
        todo.isDone = !todo.isDone

    }
    @action
    deleteTodo (todo: Todo): void {
        this.arrToDo = this.arrToDo.filter( currentTodo => currentTodo !== todo);
    }
    @action
    saveEditCard (todo: Todo, inputValue: string): boolean {
        const hasSameTitle = this.arrToDo.some(todo => todo.title === inputValue);
        if(hasSameTitle) {
            window.alert('Такая задача уже существует');
            return true;
        }
        if (inputValue === "") {
            window.alert('Введите текст задачи')
            return true;
        }
        todo.title = inputValue;
        return false;
    }
}
