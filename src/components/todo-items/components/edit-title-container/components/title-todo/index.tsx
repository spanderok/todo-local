import React from 'react';
import type { ITodo } from '../../../../../../services/todo';

const TitleTodo = ({ isDone, title }: ITodo) => (isDone ? <s>{title}</s> : <p>{title}</p>);

export default TitleTodo;
