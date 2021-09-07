import React, {useState} from "react";
import "antd/dist/antd.css";
import {Card, Checkbox, Button, Input} from "antd";
import { observer } from "mobx-react";
import { useService } from "../../hooks/useServices"
import {Todo, ToDoService} from "../../services/ToDoService";
import './style.css';

const Todo = (todo: Todo) => {
  const {toDoService} = useService<{ toDoService: ToDoService }>();
  const [inputValue,setInputValue] = useState(todo.title);
  const getInputValue = (e): void =>{
    setInputValue(e.target.value)
  };

  return (
      <Card className="card">
          { todo.editMode? (
            <div className="card-content">
              <Input value={inputValue} onChange={getInputValue} />
              <Button onClick={() => toDoService.saveEditCard(todo.id, inputValue)} type="primary">save</Button>
            </div>
            ):(
            <div className="card-content">
              <p>{todo.title}</p>
              <Button onClick={() => toDoService.toggleEditMode(todo.id)} type="primary">edit</Button>
            </div>
            )}
        <div className="control-panel">
          <Checkbox onClick={() => toDoService.completeTodo(todo.id)} checked={todo.isDone}>done</Checkbox>
          <Button onClick={() => toDoService.deleteTodo(todo.id)} type="primary">delete</Button>
        </div>
      </Card>
    );
}

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

