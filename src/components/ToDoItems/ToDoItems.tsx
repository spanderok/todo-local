import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Card, Checkbox, Button, Input } from 'antd';
import { observer } from 'mobx-react';
import { useService } from '../../hooks/useServices';
import { Todo, ToDoService } from '../../services/ToDoService';
import './style.css';
import { EditTitleContainer } from './components/editTitleContainer/editTitleContainer';

const Todo = (todo: Todo) => {
  const { toDoService } = useService<{ toDoService: ToDoService }>();

  return (
    <Card className="card">
      <EditTitleContainer {...todo}/>
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
