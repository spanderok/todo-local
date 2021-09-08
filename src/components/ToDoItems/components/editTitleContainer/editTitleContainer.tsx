import { Input } from "antd";
import { Button } from 'antd';
import { useService } from "../../../../hooks/useServices";
import React, { useState } from "react";
import { Todo, ToDoService } from "../../../../services/ToDoService";
import './style.css';
import { TitleTodo } from "./components/titleTodo/titleTodo";

export const EditTitleContainer = ({todo}: {todo: Todo}):JSX.Element => {
    const { toDoService } = useService<{ toDoService: ToDoService }>();

    const [todoTitle, setTodoTitle] = useState(todo.title);
    const [isEdit, setIsEdit] = useState(false);
  console.log(todoTitle);
  
    return (
        isEdit ? (
            <div className="card-content">
              <Input value={todoTitle} onChange={e => setTodoTitle(e.target.value)} />
              <Button onClick={() => {
                  setIsEdit(false);
                  toDoService.saveEditCard(todo, todoTitle);
            }} type="primary">
                save
              </Button>
            </div>
          ) : (
            <div className="card-content">
              <TitleTodo {...todo}/>
              <Button onClick={() => setIsEdit(true)} type="primary">
                edit
              </Button>
            </div>
          )
    );
}
