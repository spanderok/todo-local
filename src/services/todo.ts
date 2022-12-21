import 'reflect-metadata';
import { injectable } from 'inversify';
import { makeAutoObservable, reaction } from 'mobx';
import TodoTexts from '@constants/todo-texts';
import { Store } from '@store/store';
import { container } from '../inversify.config';

export interface ITodo {
  title: string;
  isDone: boolean;
  id: number;
}

@injectable()
export class ToDoService {
  store = container.get(Store);

  constructor() {
    makeAutoObservable(this);
    reaction(
      () => this.arrToDo,
      () => this.save(),
    );
  }

  arrToDo: ITodo[] = [];

  load(): void {
    const todos: ITodo[] = this.store.get(TodoTexts.key);

    if (!todos?.length) {
      this.arrToDo = [];

      return;
    }

    this.arrToDo = todos;
  }

  save(): void {
    this.store.set(TodoTexts.key, this.arrToDo);
  }

  addNewToDo({ title }: Pick<ITodo, 'title'>): void {
    const isExistsTodo = this.arrToDo?.some((todo) => todo.title === title);

    if (isExistsTodo) {
      window.alert(TodoTexts.alreadyExists);

      return;
    }

    if (!title) {
      window.alert(TodoTexts.enterTodoText);

      return;
    }

    this.arrToDo = [...this.arrToDo, { title, isDone: false, id: Date.now() }];
  }

  toggleCompleteTodo(todo: ITodo): void {
    todo.isDone = !todo.isDone;
    this.save();
  }

  deleteTodo(todo: ITodo): void {
    this.arrToDo = this.arrToDo.filter((currentTodo) => currentTodo !== todo);
  }

  saveEditCard(todo: ITodo, inputValue: string): boolean {
    const hasSameTitle = this.arrToDo.some(
      ({ title, id }) => title === inputValue && id !== todo.id,
    );

    if (hasSameTitle) {
      window.alert(TodoTexts.alreadyExists);

      return true;
    }

    if (!inputValue) {
      window.alert(TodoTexts.enterTodoText);

      return true;
    }

    todo.title = inputValue;
    this.save();

    return false;
  }
}
