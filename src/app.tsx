import React from 'react';
import InputComponent from './components/input-component/index';
import { ToDoItems } from './components/todo-items';

const App = () => (
  <div className="App">
    <InputComponent />
    <ToDoItems />
  </div>
);

export default App;
