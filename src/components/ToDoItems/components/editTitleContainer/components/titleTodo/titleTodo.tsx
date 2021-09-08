import React from "react";
import { Todo } from "../../../../../../services/ToDoService";
import './style.css';

export const TitleTodo = (todo: Todo) => {

    return (
         todo.isDone? (<s>{todo.title}</s>) : (<p>{todo.title}</p>)
    );
}
