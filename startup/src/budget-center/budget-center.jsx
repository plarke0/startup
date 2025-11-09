import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthState } from '../auth/authState';
import ActionBar from './actionBar';
import CarouselMenu from './CarouselMenu';
import DepositControls from './depositControls';
import WithdrawControls from './withdrawControls';
import TransferControls from './transferControls';
import CategoryControls from './categoryControls';
import CategoryBreakdown from './categoryBreakdown';
import CategoryLog from './CategoryLog';
const utils = require('./utils.js');


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

    const [data, setData] = useState(null);
    const [categoryLogs, setCategoryLogs] = useState(null);
    const [breakdownObject, setBreakdownObject] = useState({names: []})
    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        if (data) {
            (async () => {
                const logs = await generateLogList();
                setCategoryLogs(logs);
            })();
            (async () => {
                const breakdown = await generateBreakdownObject();
                setBreakdownObject(breakdown);
            })();
        }
    }, [data]);

    async function generateLogList() {
        const logList = [];
        const logs = data.logs;
        let i = 0;
        for (const [name, log] of Object.entries(logs)) {
            logList.push(
                <Carousel.Item key={`${name}-${i}`}>
                    <CategoryLog
                        logName={name}
                        logContent={log}
                    />
                </Carousel.Item>
            );
            i++;
        }
        return logList;
    }

    async function generateBreakdownObject() {
        return {names: data.categoryNames, values: data.categoryValues};
    }

    async function getData() {
        setTimeout(() => {
            setData(testData);
        }, 1000);
    }

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

    function createLog() {

    }

    function deposit(date, value, distribution, note) {

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
                <CategoryBreakdown categoryNames={breakdownObject.names} categoryValues={breakdownObject.values}/>

                {/* Logs */}
                <CarouselMenu controlTitle="Category Logs" numberOfPages={4}>
                    {categoryLogs}
                </CarouselMenu>
            </div>
        </main>
    );
}