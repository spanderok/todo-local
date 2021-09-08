import { Input } from "antd";
import { Button } from "antd/lib/radio";
import { useService } from "../../../../hooks/useServices";
import React, { useState } from "react";
import { Todo, ToDoService } from "../../../../services/ToDoService";
import './style.css';

export const EditTitleContainer = (todo: Todo) => {
    const { toDoService } = useService<{ toDoService: ToDoService }>();

    const [todoTitle, setTodoTitle] = useState(todo.title);
    const [isEdit, setIsEdit] = useState(false);
  
    return (
        isEdit ? (
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
          )
    );
}
