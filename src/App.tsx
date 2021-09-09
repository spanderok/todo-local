import React from "react";
import { InputComponent } from "./components/HeaderComponents/InputComponent";
import { ToDoItems } from "./components/ToDoItems/ToDoItems";

export const App = () => {

   
    return (
        <div className="App">
            <InputComponent />
            <ToDoItems />
        </div>
    );
}
