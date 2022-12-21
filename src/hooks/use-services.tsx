import type { PropsWithChildren } from 'react';
import React, { createContext, useContext } from 'react';
import type { ToDoService } from '../services/todo';

const ToDoServiceContext = createContext({});

export function useService<T>(): T {
  return useContext(ToDoServiceContext) as T;
}

interface IServiceProvider {
  toDoService: ToDoService;
}

export function ServiceProvider(properties: PropsWithChildren<IServiceProvider>): JSX.Element {
  const { children, ...services } = properties;

  return <ToDoServiceContext.Provider value={services}>{children}</ToDoServiceContext.Provider>;
}
