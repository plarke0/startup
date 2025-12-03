import React from "react";
import { Button } from "react-bootstrap";

export default function TransferControls({ transferFunction, selectOptions }) {
    function transfer() {
        transferFunction()
    }

    return (
        <div className="card-body">
            <form>
                <h4>Transfer</h4>
                <div className="row g-1">
                    <div className="col">
                        <input id="transfer-amount" type="number" placeholder="Amount" className="form-control"/>
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
                    {selectOptions.map((selectOption) => <option value={selectOption.value}>{selectOption.label}</option>)}
                </select>
                <label htmlFor="transfer-destination">Destination</label>
                <select id="transfer-destination" className="form-select">
                    {selectOptions.map((selectOption) => <option value={selectOption.value}>{selectOption.label}</option>)}
                </select>
            </form>
        </div>
    );
}