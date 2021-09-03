import React from "react";
import './ToDoItem.module.css';
import "antd/dist/antd.css";
import {Card, Checkbox } from "antd";

const ToDoItem = () => {
    function onChangeCheckbox(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    return (
        <div className="ToDoItem">
                <Card style={{ width: 300 }}>
                    <div>
                        <p>Card content Card content Card content Card content Card contentCard content
                            Card content Card contentCard content Card content </p>
                    </div>
                    <div>
                        <Checkbox onChange={onChangeCheckbox}>In progress</Checkbox>
                        <Checkbox onChange={onChangeCheckbox}>done</Checkbox>
                    </div>
                </Card>
        </div>
    );

}

export default ToDoItem;