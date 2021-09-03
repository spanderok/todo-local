import React from "react";
import './ToDoList.css';
import "antd/dist/antd.css";
import { Button, Card, Checkbox } from "antd";
import ToDoItem from './components/ToDoItem/ToDoItem';


const ToDoList = () => {


    return (
        <div className="ToDoList">
            <div className="ContainerForTickets">
                <ToDoItem />
                <Card style={{ width: 300 }}>
                    <p>Card content</p>
                </Card>
            </div>

            <Button type="primary">Creat to do</Button>
        </div>
    );

}

export default ToDoList;