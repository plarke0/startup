import React, { useEffect } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthState } from '../auth/authState';
import ActionBar from './actionBar';
import CarouselMenu from './CarouselMenu';

//TODO: Add user count mock-up

const testData = {
    categoryNames: ["Savings", "Tithing", "Rent", "Fun"],
    categoryValues: {
        "Savings": 22000,
        "Tithing": 3000,
        "Rent": 10000,
        "Fun": 100,
    },
    depositRatios: {
        "Even": {
            "Savings": 2500,
            "Tithing": 2500,
            "Rent": 2500,
            "Fun": 2500,
        },
        "Default": {
            "Savings": 3000,
            "Tithing": 1000,
            "Rent": 5000,
            "Fun": 1000,
        }
    },
    logs: {
        "Savings": [
            {id: "250918-0", date: "9/18/25", delta: 1000, newAmount: 1000, note: "Just started saving!"},
            {id: "250918-1", date: "9/18/25", delta: 100, newAmount: 1100, note: "A dollar saved."},
            {id: "250920-0", date: "9/20/25", delta: -1100, newAmount: 0, note: "My money!! :'("},
            {id: "251010-0", date: "10/10/25", delta: 22000, newAmount: 22000, note: "making it make sense"},
        ],
        "Tithing": [
            {id: "250918-0", date: "9/18/25", delta: 100, newAmount: 100, note: "Deposit to 'Tithing'"},
            {id: "250922-0", date: "9/22/25", delta: -100, newAmount: 0, note: "Paid my thithing"},
            {id: "251001-0", date: "10/1/25", delta: 3000, newAmount: 3000, note: "making it make sense"},
        ],
        "Rent": [
            {id: "251009-0", date: "10/9/25", delta: 10000, newAmount: 10000, note: "making it make sense"},
        ],
        "Fun": [
            {id: "250918-0", date: "9/18/25", delta: 50, newAmount: 50, note: "Maybe I'll have fun someday. I'm also going to use this note as a test for really long notes. Why you would add a note like this, idk, but I want it to look okay if someone does. I think this is long enough."},
            {id: "250918-1", date: "9/18/25", delta: 50, newAmount: 100, note: "making it make sense"},
        ]
    },
    unusedLogs: {
        "Dates-MERGED": [
            {id: "250920-0", date: "9/20/25", delta: 0, newAmount: 0, note: "EXAMPLE"},
        ]
    }
}

export default function BudgetCenter({ userName, authState, onAuthChange }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (authState === AuthState.Unauthenticated) {
            navigate("/login")
        }
    }, [authState, navigate]);

    function onLogout() {
        localStorage.removeItem("userName");
        onAuthChange(userName, AuthState.Unauthenticated);
    }

    async function save() {
        setTimeout(() => {
            console.log("Saved!");
        }, 1500);
    }

    function undo() {
        console.log("Undone!");
    }

    function redo() {
        console.log("Redone!");
    }

    return (
        <main>
            <ActionBar undo={undo} redo={redo} save={save} onLogout={onLogout} userName={userName}/>
            {/* Main div */}
            <div className="container d-flex flex-column flex-sm-row justify-content-between">
                {/* Control panel */}
                <CarouselMenu numberOfPages={4}>
                    {/* Deposit controls */}
                    <Carousel.Item key={0} className="card-body">
                        <form>
                            <h4>Deposit</h4>
                            <div className="row g-1">
                                <div className="col">
                                    <input type="number" placeholder="Amount" className="form-control"/>
                                </div>
                                <div className="col">
                                    <button type="button" className="btn btn-primary">Deposit</button>
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
                                    <button type="button" className="btn btn-primary me-1">Edit</button>
                                    <button type="button" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </form>
                    </Carousel.Item>
                    {/* Withdraw controls */}
                    <Carousel.Item key={1} className="card-body">
                        <form>
                            <h4>Withdraw</h4>
                            <div className="row g-1">
                                <div className="col">
                                    <input type="number" placeholder="Amount" className="form-control"/>
                                </div>
                                <div className="col">
                                    <button type="button" className="btn btn-primary">Withdraw</button>
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
                    </Carousel.Item>
                    {/* Transfer controls */}
                    <Carousel.Item key={2} className="card-body">
                        <form>
                            <h4>Transfer</h4>
                            <div className="row g-1">
                                <div className="col">
                                    <input type="number" placeholder="Amount" className="form-control"/>
                                </div>
                                <div className="col">
                                    <button type="button" className="btn btn-primary">Transfer</button>
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
                    </Carousel.Item>
                    {/* Category controls */}
                    <Carousel.Item key={3} className="card-body">
                        <form>
                            <h4>Category Controls</h4>
                            <ul className="list-group list-group-flush">
                                {/* Create category */}
                                <li className="list-group-item">
                                    <h6>Create Category:</h6>
                                    <div className="row g-1">
                                        <div className="col">
                                            <input type="text" placeholder="Name" className="form-control"/>
                                        </div>
                                        <div className="col">
                                            <button type="button"  className="btn btn-primary">Create</button>
                                        </div>
                                    </div>
                                </li>
                                {/* Rename category */}
                                <li className="list-group-item">
                                    <h6>Rename:</h6>
                                    <select id="rename-dropdown" className="form-select mb-2">
                                        <option>Tithing</option>
                                        <option>Savings</option>
                                        <option>Fun</option>
                                    </select>
                                    <div className="row g-1">
                                        <div className="col">
                                            <input type="text" placeholder="New Name" className="form-control"/>
                                        </div>
                                        <div className="col">
                                            <button type="button"  className="btn btn-primary">Rename</button>
                                        </div>
                                    </div>
                                </li>
                                {/* Merge categories */}
                                <li className="list-group-item">
                                    <h6>Merge:</h6>
                                    <label htmlFor="merge-source">Source</label>
                                    <select id="merge-source" className="form-select mb-2">
                                        <option>Tithing</option>
                                        <option>Savings</option>
                                        <option>Fun</option>
                                    </select>
                                    <label htmlFor="merge-destination">Destination</label>
                                    <select id="merge-destination" className="form-select mb-2">
                                        <option>Tithing</option>
                                        <option>Savings</option>
                                        <option>Fun</option>
                                    </select>
                                    <button type="button" className="btn btn-primary">Merge</button>
                                </li>
                            </ul>
                        </form>
                    </Carousel.Item>
                </CarouselMenu>
                {/* Category breakdown */}
                <div className="d-flex flex-column justify-content-start align-items-center w-100 mb-2">
                    <h4>Category Breakdown</h4>
                    {/* TODO: make functional and animate */}
                    {/*https://stackoverflow.com/questions/59921845/math-to-create-svg-pie-chart-without-using-css-or-js*/}
                    <svg width="230" height="230">
                        <circle cx="110" cy="110" r="80" stroke="green" strokeWidth="40" fill="#ffffff"/>
                        <text fill="#000000" fontSize="40" justify="center" fontFamily="Monospace" x="40" y="125">$10.00</text>
                    </svg>
                    <div className="card col-11 col-lg-8 col-xl-6">
                        <div className="card-header text-center">
                            <h5>Categories:</h5>
                        </div>
                        {/* TODO: make scrolable */}
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Tithing: $0.00</li>
                            <li className="list-group-item">Savings: $0.00</li>
                            <li className="list-group-item">Fun: $0.00</li>
                        </ul>
                    </div>
                </div>
                {/* Logs */}
                <div className="card w-100">
                    {/* Log selection */}
                    <div className="card-header text-center">
                        <button type="button" className="btn btn-outline-dark me-1" data-bs-target="#log-carousel" data-bs-slide="previous">&lt;</button>
                        <span>Category Log</span>
                        <button type="button" className="btn btn-outline-dark ms-1" data-bs-target="#log-carousel" data-bs-slide="next">&gt;</button>
                    </div>
                    {/* Log entries */}
                    <div id="log-carousel" className="carousel carousel-dark-slide" data-bs-ride="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                {/* Log title */}
                                <div className="card-header text-center">
                                    <h4>Savings</h4>
                                </div>
                                {/* TODO: make scrollable */}
                                {/* Log entries */}
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="d-flex flex-row justify-content-between">
                                            <span>9/20/25</span>
                                            <span style={{color: "red"}}>-$10.00</span>
                                        </div>
                                        <div className="d-flex flex-row justify-content-between">
                                            <span>
                                                <button id="savings-note-1-btn" type="button" className="btn btn-outline-dark btn-sm collapsed" data-bs-toggle="collapse" data-bs-target="#savings-note-1">Note</button>
                                            </span>
                                            <span style={{color: "gray"}}>$0.00</span>
                                        </div>
                                        <div id="savings-note-1" className="collapse">
                                            Example note content.
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex flex-row justify-content-between">
                                            <span>9/18/25</span>
                                            <span style={{color: "green"}}>$10.00</span>
                                        </div>
                                        <div className="d-flex flex-row justify-content-between">
                                            <span>
                                                <button id="savings-note-0-btn" type="button" className="btn btn-outline-dark btn-sm collapsed" data-bs-toggle="collapse" data-bs-target="#savings-note-0">Note</button>
                                            </span>
                                            <span style={{color: "gray"}}>$10.00</span>
                                        </div>
                                        <div id="savings-note-0" className="collapse">
                                            Really long example note content.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="carousel-item">
                                {/* Log title */}
                                <div className="card-header text-center">
                                    <h4>Fun</h4>
                                </div>
                                {/* TODO: make scrollable */}
                                {/* Log entries */}
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="d-flex flex-row justify-content-between">
                                            <span>9/20/25</span>
                                            <span style={{color: "red"}}>-$5.00</span>
                                        </div>
                                        <div className="d-flex flex-row justify-content-between">
                                            <span>
                                                <button id="fun-note-1-btn" type="button" className="btn btn-outline-dark btn-sm collapsed" data-bs-toggle="collapse" data-bs-target="#fun-note-1">Note</button>
                                            </span>
                                            <span style={{color: "gray"}}>$10.00</span>
                                        </div>
                                        <div id="fun-note-1" className="collapse">
                                            Example note content.
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex flex-row justify-content-between">
                                            <span>9/18/25</span>
                                            <span style={{color: "green"}}>$15.00</span>
                                        </div>
                                        <div className="d-flex flex-row justify-content-between">
                                            <span>
                                                <button id="fun-note-0-btn" type="button" className="btn btn-outline-dark btn-sm collapsed" data-bs-toggle="collapse" data-bs-target="#fun-note-0">Note</button>
                                            </span>
                                            <span style={{color: "gray"}}>$15.00</span>
                                        </div>
                                        <div id="fun-note-0" className="collapse">
                                            Really long example note content.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}