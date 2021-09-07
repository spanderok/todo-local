import React from "react";
import { InputComponent } from "ToDoList/components/HeaderComponents/InputComponent";
import { ToDoItems } from "ToDoList/components/ToDoItem/ToDoItems";
import { ToDoList } from "./ToDoList/ToDoList";



export const App = () => {
    return (
        <div className="App">
            <InputComponent />
            <ToDoItems />
        </div>
    );

}
