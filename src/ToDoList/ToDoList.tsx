import React from "react";
import './ToDoList.css';
import "antd/dist/antd.css";
import { Button, Card, Checkbox, Input } from "antd";
import { ToDoItem } from './components/ToDoItem/ToDoItem';


export const ToDoList = () => {


    return (
        <div className = "to-do-list">
            <div className="contaner-input-button">
                <div className="input">
                    <Input placeholder="Enet new to do text"/>
                </div>
                <Button type = "primary">Creat to do</Button>
            </div>
            <div className="ContainerForTickets">
                <ToDoItem />
            </div>
        </div>
    );

}

