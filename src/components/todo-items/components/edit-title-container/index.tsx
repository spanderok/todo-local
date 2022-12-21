import { Input, Button } from 'antd';
import React, { useState } from 'react';
import { useService } from '../../../../hooks/use-services';
import type { ITodo, ToDoService } from '../../../../services/todo';
import TitleTodo from './components/title-todo/index';
import styles from './styles.module.scss';

const EditTitleContainer = ({ todo }: { todo: ITodo }): JSX.Element => {
  const { toDoService } = useService<{ toDoService: ToDoService }>();

  const [todoTitle, setTodoTitle] = useState(todo.title);
  const [isEdit, setIsEdit] = useState(false);

  return isEdit ? (
    <div className={styles.cardContent}>
      <Input
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        onPressEnter={() => setIsEdit(toDoService.saveEditCard(todo, todoTitle))}
      />
      <Button
        onClick={() => setIsEdit(toDoService.saveEditCard(todo, todoTitle))}
        type="primary"
        className={styles.antBtn}
      >
        save
      </Button>
    </div>
  ) : (
    <div className={styles.cardContent}>
      <TitleTodo {...todo} />
      <Button onClick={() => setIsEdit(true)} type="primary">
        edit
      </Button>
    </div>
  );
};

export default EditTitleContainer;
