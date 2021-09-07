import React from "react";
import './ToDoItem.css';
import "antd/dist/antd.css";
import {Card, Checkbox } from "antd";
import { observer, inject  } from "mobx-react";
import { Button } from "antd";
import {useContext} from "react";
import {useService} from "../../../useService"
import { ToDoService } from "ToDoService";

export const ToDoItem = (observer(() => {
    const {toDoService} = useService<{ toDoService: ToDoService }>();
    function onChangeCheckbox(e) {
        console.log(`checked = ${e.target.checked}`);
    }
    console.log(toDoService)
    return (
        <div className="to-do-item">
                <Card className="card">
                    <div>
                        <p> </p>
                    </div>
                    <div className="checkboxes">
                        <Checkbox onChange={onChangeCheckbox}>done</Checkbox>
                        <Button type="primary">delete</Button>
                    </div>
                </Card>
        </div>
    );

}))

