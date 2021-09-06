import React from "react";
import './ToDoItem.css';
import "antd/dist/antd.css";
import {Card, Checkbox } from "antd";

export function ToDoItem () {
    function onChangeCheckbox(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    return (
        <div className="to-do-item">
                <Card className="card">
                    <div>
                        <p>Card content Card content Card content Card content Card contentCard content
                            Card content Card contentCard content Card content </p>
                    </div>
                    <div className="checkboxes">
                        <Checkbox onChange={onChangeCheckbox}>In progress</Checkbox>
                        <Checkbox onChange={onChangeCheckbox}>done</Checkbox>
                    </div>
                </Card>
        </div>
    );

}

