import { Store } from './../store/store';
import { makeAutoObservable, reaction } from 'mobx';
import { injectable } from 'inversify';
import { inject } from 'inversify'
import 'reflect-metadata';
import { container } from '../components/ToDoItems/inversify.config';

export type Todo = { title: string, isDone: boolean, id: number };
@injectable()
export class ToDoService{

    store: Store<Todo> = container.get(Store)

    constructor() {
        makeAutoObservable(this)
        reaction(() => this.arrToDo, () => this.save());

    }

    arrToDo: Todo[] = [];

    load() {
        const todos: Array<Todo> = this.store.get("TODO");
        if(todos === null){
            this.arrToDo = [];
            return
        }
        this.arrToDo = todos;
    }

    save() {
        this.store.set("TODO", this.arrToDo);
    }
    
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
    
    completeTodo (todo: Todo): void {
        todo.isDone = !todo.isDone
    }
    
    deleteTodo (todo: Todo): void {
        this.arrToDo = this.arrToDo.filter( currentTodo => currentTodo !== todo);
    }

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
        this.save();
        return false;
    }
}
