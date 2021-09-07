import React from "react";
import "antd/dist/antd.css";
import { Card, Checkbox, Button } from "antd";
import { observer } from "mobx-react";
import { useService } from "../../hooks/useServices"
import { ToDoService } from "../../services/ToDoService";
import './style.css';

export const ToDoItems = (observer(() => {
    const {toDoService} = useService<{ toDoService: ToDoService }>();
    function onChangeCheckbox(e) {
        console.log(`checked = ${e.target.checked}`);
    }
    console.log(toDoService)
    return (
        <div className="to-do-item">
                <Card className="card">
                    <div>
                        <p> dfbsgfbndsfgbsfbsbsbsbsbs
                        sfbgsb
                        sbs</p>
                    </div>
                    <div className="control-panel">
                        <Checkbox onChange={onChangeCheckbox}>done</Checkbox>
                        <Button type="primary">delete</Button>
                    </div>
                </Card>
        </div>
    );

}))

