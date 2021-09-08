import React, {useState} from "react";
import "antd/dist/antd.css";
import { Button, Input } from "antd";
import './style.css';
import { useService } from "../../hooks/useServices"
import { ToDoService } from "../../services/ToDoService";


export const InputComponent = () => {
    const [inputValue,setInputValue] = useState('');
    const {toDoService} = useService<{ toDoService: ToDoService }>();

    const createTodoObj = (): void => {
        const todo = {
            title: inputValue,
            isDone: false,
            id: new Date().valueOf()
        };
        toDoService.addNewToDo(todo);
        setInputValue('');
    };
    const getInputValue = (e): void =>{
        setInputValue(e.target.value)
    };

    return (
        <div className="contaner-input-button">
            <div className="input">
                <Input value={inputValue} onChange={getInputValue} placeholder="Enet new to do text"/>
            </div>
            <Button onClick={createTodoObj} type="primary">Creat to do</Button>
        </div>
    );
};












type Person = { name: string, age: number}
type Person2 = Partial<Person>