import React from "react";
import './ToDoList.module.css';
import "antd/dist/antd.css";
import { Button, Card, Checkbox, Input } from "antd";
import ToDoItem from './components/ToDoItem/ToDoItem';


const ToDoList = () => {


    return (
        <div className="to-do-list">
            <div className="ContainerForTickets">
                <ToDoItem />
            </div>
            <Input className="input" placeholder="Enet new to do text" />
            <Button type="primary">Creat to do</Button>
        </div>
    );

}

export default ToDoList;