import { action, observable, makeAutoObservable } from 'mobx';

export type Todo = { title: string, isDone: boolean, id: number };
export class ToDoService{

    constructor() {
        makeAutoObservable(this)
    }

    @observable
    arrToDo: Todo[] = [];
    
    @action
    addNewToDo ({title}: Pick<Todo, "title">): void {
        const todo = this.arrToDo.some(todo => todo.title === title)
        if(todo) {
            window.alert('Такая задача уже существует')
            return
        }
        this.arrToDo = [...this.arrToDo,{title, isDone: false, id: new Date().valueOf()}];
        console.log(this.arrToDo[0].isDone);

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
            return false;
        }
        todo.title = inputValue;
        return true;
    }
}