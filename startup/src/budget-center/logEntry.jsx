import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";


export default function LogEntry({ date, delta, newAmount, note }) {
    const [open, setOpen] = useState(false);

    function deltaColor() {
        if (delta < 0) {
            return "red";
        } else {
            return "green";
        }
    }

    function stringifyMoney(value) {
        const valueString = (Math.abs(value)/100).toFixed(2);
        if (value < 0) {
            return `-$${valueString}`;
        } else {
            return `$${valueString}`;
        }
    }

    return (
        <li className="list-group-item">
            <div className="d-flex flex-row justify-content-between">
                <span>{date}</span>
                <span style={{color: deltaColor()}}>{stringifyMoney(delta)}</span>
            </div>
            <div className="d-flex flex-row justify-content-between">
                <span>
                    <Button variant="outline-dark" size="sm" onClick={() => setOpen(!open)}>Note</Button>
                </span>
                <span style={{color: "gray"}}>{stringifyMoney(newAmount)}</span>
            </div>
            <Collapse in={open}>
                <div>
                    {note}
                </div>
            </Collapse>
        </li>
    );
}