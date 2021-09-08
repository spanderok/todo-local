import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Card, Checkbox, Button, Input } from 'antd';
import { observer } from 'mobx-react';
import { useService } from '../../hooks/useServices';
import { Todo, ToDoService } from '../../services/ToDoService';
import './style.css';

const Todo = (todo: Todo) => {
  const { toDoService } = useService<{ toDoService: ToDoService }>();
  const [todoTitle, setTodoTitle] = useState(todo.title);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <Card className="card">
      {isEdit ? (
        <div className="card-content">
          <Input value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
          <Button onClick={() => setIsEdit(toDoService.saveEditCard(todo, todoTitle))} type="primary">
            save
          </Button>
        </div>
      ) : (
        <div className="card-content">
          {todo.isDone ? <s>{todo.title}</s> : <p>{todo.title}</p>}
          <Button onClick={() => setIsEdit(true)} type="primary">
            edit
          </Button>
        </div>
      )}
      <div className="control-panel">
        <Checkbox onClick={() => toDoService.completeTodo(todo)} checked={todo.isDone}>
          done
        </Checkbox>
        <Button onClick={() => toDoService.deleteTodo(todo)} type="primary">
          delete
        </Button>
      </div>
    </Card>
  );
};

export const ToDoItems = observer(() => {
  const { toDoService } = useService<{ toDoService: ToDoService }>();
  const todos = toDoService.arrToDo;
  return (
    <div>
      {todos.map(todo => (
        <Todo {...todo} key={todo.id} />
      ))}
    </div>
  );
});
