import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';
import { ServiceProvider } from './hooks/use-services';
import './inversify.config';
import { ToDoService } from './services/todo';

ReactDOM.render(
  <ServiceProvider toDoService={new ToDoService()}>
    <App />
  </ServiceProvider>,
  document.getElementById('root'),
);
