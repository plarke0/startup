import React from "react";
import { Button } from "react-bootstrap";

export default function WithdrawControls() {
    function withdraw() {
        //TODO
    }

    return (
        <div className="card-body">
            <form>
                <h4>Withdraw</h4>
                <div className="row g-1">
                    <div className="col">
                        <input type="number" placeholder="Amount" className="form-control"/>
                    </div>
                    <div className="col">
                        <Button variant="primary" onClick={withdraw}>Withdraw</Button>
                    </div>
                </div>
                <label htmlFor="withdraw-date">Date</label>
                <input id="withdraw-date" type="date" className="form-control"/>
                <label htmlFor="withdraw-note">Note</label>
                <input id="withdraw-note" type="text" className="form-control"/>
                <label htmlFor="withdraw-category">Source</label>
                <select id="withdraw-category" className="form-select">
                    <option>Tithing</option>
                    <option>Savings</option>
                    <option>Fun</option>
                </select>
            </form>
        </div>
    );
}