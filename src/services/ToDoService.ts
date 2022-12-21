import { Store } from '../store/store';
import { makeAutoObservable, reaction } from 'mobx';
import { injectable } from 'inversify';
import { container } from '../inversify.config';
import "reflect-metadata";
import TodoTexts from '../constants/todoTexts';

export type Todo = { title: string, isDone: boolean, id: number };
@injectable()
export class ToDoService{

    store = container.get(Store);

    constructor() {
        makeAutoObservable(this)
        reaction(() => this.arrToDo, () => this.save());

    }

    arrToDo: Todo[] = [];

    load(): Todo[] {
        const todos: Array<Todo> = this.store.get(TodoTexts.key);

        if(!todos?.length){
            this.arrToDo = [];
            return
        }

        this.arrToDo = todos;
    }

    save(): void {
        this.store.set(TodoTexts.key, this.arrToDo);
    }

    addNewToDo ({ title }: Pick<Todo, "title">): void {
        const todo = this.arrToDo?.some(todo => todo.title === title)
        if(todo) {
            window.alert(TodoTexts.alreadyExists)
            return
        }
        if (!title) {
            window.alert(TodoTexts.enterTodoText)
            return
        }
        this.arrToDo = [...this.arrToDo, { title, isDone: false, id: new Date().valueOf() }];

    }

    toggleCompleteTodo ( todo: Todo ): void {
        todo.isDone = !todo.isDone
        this.save()
    }

    deleteTodo ( todo: Todo ): void {
        this.arrToDo = this.arrToDo.filter( currentTodo => currentTodo !== todo);
    }

    saveEditCard ( todo: Todo, inputValue: string ): boolean {
        const hasSameTitle = this.arrToDo.some(({ title, id }) => title === inputValue && id !== todo.id);

        if(hasSameTitle) {
            window.alert(TodoTexts.alreadyExists);
            return true;
        }

        if (!inputValue) {
            window.alert(TodoTexts.enterTodoText)
            return true;
        }

        todo.title = inputValue;
        this.save();
        return false;
    }
}
