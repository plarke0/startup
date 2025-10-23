import React from "react";
import { Button } from "react-bootstrap";


export default function LogEntry({ id, date, delta, newAmount, note }) {
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
                    <Button id={`${id}-btn`} type="button" className="btn btn-outline-dark btn-sm collapsed" data-bs-toggle="collapse" data-bs-target={`#${id}`}>Note</Button>
                </span>
                <span style={{color: "gray"}}>{stringifyMoney(newAmount)}</span>
            </div>
            <div id={id} className="collapse">
                {note}
            </div>
        </li>
    );
}