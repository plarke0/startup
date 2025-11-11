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
import * as utils from './utils';
import testData from './testData.json'


export default function BudgetCenter({ userName, authState, onAuthChange }) {
    const navigate = useNavigate();
    {/** TODO: Add auth token to auth check **/}
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

    function getDepositRatio() {
        const ratioKey = utils.getValueFrom("deposit-destination", "key");
        console.log(ratioKey);
        return ratioKey;
    }

    function deposit() {
        const amountValue = utils.getValueFrom("deposit-amount", "money");
        if (amountValue === null) {
            //ERROR
            return;
        }
        const dateValue = utils.getValueFrom("deposit-date", "date");
        if (dateValue === null) {
            //ERROR
            return;
        }
        const noteValue = utils.getValueFrom("deposit-note", "note");
        if (noteValue === null) {
            //ERROR
            return;
        }
        const ratioKey = getDepositRatio();
    }

    return (
        <main>
            <ActionBar undo={undo} redo={redo} save={save} onLogout={onLogout} userName={userName}/>
            {/* Main div */}
            <div className="container d-flex flex-column flex-sm-row justify-content-between">
                {/* Control panel */}
                <CarouselMenu controlTitle="Control Type" numberOfPages={4}>
                    <Carousel.Item key={0}>
                        <DepositControls depositFunction={deposit}/>
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