import { action, observable, makeAutoObservable } from 'mobx';

export type Todo = { title: string, isDone: boolean, id: number, editMode: boolean };
export class ToDoService{

    constructor() {
        makeAutoObservable(this)
    }

    @observable
    arrToDo: Todo[] = [];
    
    @action
    addNewToDo ({title}: Pick<Todo, "title">): void {
        const todo = this.arrToDo.find(todo => todo.title === title)
        if(!!todo) {
            window.alert('Такая задача уже существует')
            return
        }
        this.arrToDo = [...this.arrToDo,{title, isDone: false, id: new Date().valueOf(), editMode: false}];
    };
    @action
    completeTodo (id): void {
        const todo = this.arrToDo.find(todo => todo.id === id)
        if(!todo)return;
        todo.isDone = !todo.isDone
    };
    @action
    deleteTodo (id): void {
        this.arrToDo = this.arrToDo.filter( todo => todo.id !== id);
    };
    @action
    toggleEditMode (id): void {
        const todo = this.arrToDo.find(todo => todo.id === id)
        if(!todo)return;
        todo.editMode = !todo.editMode;
    };
    @action
    saveEditCard (id, inputValue): void {
        const theSameTodo = this.arrToDo.find(todo => todo.title === inputValue)
        if(!!theSameTodo) {
            window.alert('Такая задача уже существует')
            return
        }
        const todo = this.arrToDo.find(todo => todo.id === id)
        if(!todo)return;
        todo.editMode = !todo.editMode;
        todo.title = inputValue;
    };
}