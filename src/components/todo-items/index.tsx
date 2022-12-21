import { Card, Checkbox, Button } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import 'antd/dist/antd.min.css';
import { useService } from '../../hooks/use-services';
import type { ToDoService, ITodo } from '../../services/todo';
import EditTitleContainer from './components/edit-title-container/index';
import styles from './styles.module.scss';

const Todo = observer(({ todo }: { todo: ITodo }) => {
  const { toDoService } = useService<{ toDoService: ToDoService }>();

  return (
    <Card className={styles.card}>
      <EditTitleContainer todo={todo} />
      <div className={styles.controlPanel}>
        <Checkbox onClick={() => toDoService.toggleCompleteTodo(todo)} checked={todo.isDone}>
          done
        </Checkbox>
        <Button onClick={() => toDoService.deleteTodo(todo)} type="primary">
          delete
        </Button>
      </div>
    </Card>
  );
});

export const ToDoItems = observer(() => {
  const { toDoService } = useService<{ toDoService: ToDoService }>();
  const todos = toDoService.arrToDo;

  useEffect(() => {
    toDoService.load();

    return () => toDoService.save();
  }, [toDoService]);

  return (
    <section className={styles.cardsSection}>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </section>
  );
});

export default ToDoItems;
