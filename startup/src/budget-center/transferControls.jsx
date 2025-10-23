import React from "react";
import { Button } from "react-bootstrap";

export default function TransferControls() {
    function transfer() {
        //TODO
    }

    return (
        <div className="card-body">
            <form>
                <h4>Transfer</h4>
                <div className="row g-1">
                    <div className="col">
                        <input type="number" placeholder="Amount" className="form-control"/>
                    </div>
                    <div className="col">
                        <Button variant="primary" onClick={transfer}>Transfer</Button>
                    </div>
                </div>
                <label htmlFor="transfer-date">Date</label>
                <input id="transfer-date" type="date" className="form-control"/>
                <label htmlFor="transfer-note">Note</label>
                <input id="transfer-note" type="text" className="form-control"/>
                <label htmlFor="transfer-source">Source</label>
                <select id="transfer-source" className="form-select">
                    <option>Tithing</option>
                    <option>Savings</option>
                    <option>Fun</option>
                </select>
                <label htmlFor="transfer-destination">Destination</label>
                <select id="transfer-destination" className="form-select">
                    <option>Tithing</option>
                    <option>Savings</option>
                    <option>Fun</option>
                </select>
            </form>
        </div>
    );
}