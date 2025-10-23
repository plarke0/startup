import React from "react";
import { Button } from "react-bootstrap";

export default function DepositControls() {
    function editCurrentDepositRatio() {
        //TODO
    }

    function saveNewDepositRatio() {
        //TODO
    }

    function deposit() {
        //TODO
    }

    return (
        <div className="card-body">
            <form>
                <h4>Deposit</h4>
                <div className="row g-1">
                    <div className="col">
                        <input type="number" placeholder="Amount" className="form-control"/>
                    </div>
                    <div className="col">
                        <Button variant="primary">Deposit</Button>
                    </div>
                </div>
                <label htmlFor="deposit-date">Date</label>
                <input id="deposit-date" type="date" className="form-control"/>
                <label htmlFor="deposit-note">Note</label>
                <input id="deposit-note" type="text" className="form-control"/>
                <label htmlFor="deposit-destination">Destination</label>
                <select id="deposit-destination" className="form-select">
                    <option>Deposit Ratio</option>
                    <option>Tithing</option>
                    <option>Savings</option>
                    <option>Fun</option>
                </select>
                <div className="card mt-2">
                    <div className="card-header">
                        <label htmlFor="category-splits">Deposit Ratios</label>
                        <select id="category-splits" className="form-select">
                            <option>Default</option>
                            <option>Create New +</option>
                        </select>
                    </div>
                    {/* TODO: make this area scrollable */}
                    {/*https://stackoverflow.com/questions/7504918/how-to-create-a-div-with-vertical-scrollable-contents-and-fixed-footer-which-is*/}
                    {/*https://stackoverflow.com/questions/64400122/how-make-a-fixed-content-scrollable-in-bootstrap*/}
                    {/* Ability to edit values */}
                    {/* overflow-x/y/auto */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Tithing: 10%</li>
                        <li className="list-group-item">Savings: 70%</li>
                        <li className="list-group-item">Fun: 20%</li>
                    </ul>
                    <div className="card-footer">
                        <Button variant="primary" className="me-1">Edit</Button>
                        <Button variant="primary">Save</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}