import React, { useEffect } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthState } from '../auth/authState';
import ActionBar from './actionBar';
import CarouselMenu from './CarouselMenu';
import DepositControls from './depositControls';
import WithdrawControls from './withdrawControls';
import TransferControls from './transferControls';
import CategoryControls from './categoryControls';
import CategoryBreakdown from './categoryBreakdown';
import LogEntry from './logEntry';
import CategoryLog from './CategoryLog';

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
                <CarouselMenu controlTitle="Control Type" numberOfPages={4}>
                    <Carousel.Item key={0}>
                        <DepositControls/>
                    </Carousel.Item>

                    <Carousel.Item key={1}>
                        <WithdrawControls/>
                    </Carousel.Item>

                    <Carousel.Item key={2}>
                        <TransferControls/>
                    </Carousel.Item>

                    <Carousel.Item key={3}>
                        <CategoryControls/>
                    </Carousel.Item>
                </CarouselMenu>

                {/* Category breakdown */}
                <CategoryBreakdown/>

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
                                    <LogEntry id="test" date="10/10/13" delta={-1000} newAmount={2000} note="Hope this works"/>
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