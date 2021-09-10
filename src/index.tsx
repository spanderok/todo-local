import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import { ToDoService } from "./services/ToDoService"
import './style.css';
import { ServiceProvider } from './hooks/useServices';
import './inversify.config';

ReactDOM.render(<ServiceProvider toDoService={ new ToDoService()}>
    <App />
</ServiceProvider>, document.getElementById('root'));
