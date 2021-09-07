import React from "react";
import "antd/dist/antd.css";
import { Card, Checkbox, Button } from "antd";
import { observer } from "mobx-react";
import { useService } from "../../hooks/useServices"
import {Todo, ToDoService} from "../../services/ToDoService";
import './style.css';

const Todo = (todo: Todo) => {
  function onChangeCheckbox(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  const {toDoService} = useService<{ toDoService: ToDoService }>();


  return (
      <Card className="card">
          <p>{todo.title}</p>
          <div className="control-panel">
              <Checkbox onClick={() => toDoService.completeTodo(todo.id)} checked={todo.isDone}>done</Checkbox>
              <Button type="primary">delete</Button>
          </div>
      </Card>

    );
};

export const ToDoItems = observer(() => {
    const {toDoService} = useService<{ toDoService: ToDoService }>();
    const todos = toDoService.arrToDos;
    console.log(todos);
    return (
        <div>
            {todos.map( todo => <Todo {...todo} key={todo.id}/>)}
        </div>
    );
})

