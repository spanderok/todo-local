import { Button, Input } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import { useService } from '../../hooks/use-services';
import type { ToDoService } from '../../services/todo';
import styles from './styles.module.scss';

const InputComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const { toDoService } = useService<{ toDoService: ToDoService }>();

  const createTodoObj = (): void => {
    toDoService.addNewToDo({ title: inputValue });
    setInputValue('');
  };
  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.containerInputButton}>
      <div className={styles.input}>
        <Input
          value={inputValue}
          onChange={getInputValue}
          onPressEnter={createTodoObj}
          placeholder="Enet new to do text"
        />
      </div>
      <Button onClick={createTodoObj} type="primary">
        Creat to do
      </Button>
    </div>
  );
};

export default InputComponent;
