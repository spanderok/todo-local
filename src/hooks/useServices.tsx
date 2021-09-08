import * as React from 'react';
import {createContext, useContext} from "react";

const ToDoServiceContext = createContext({});

export function useService<T> (): T {
    return useContext(ToDoServiceContext) as T;
}

export function ServiceProvider(properties): JSX.Element {
    const { children, ...services } = properties;
    return <ToDoServiceContext.Provider value={services}>{children}</ToDoServiceContext.Provider>;
}