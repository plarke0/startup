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
    //TODO: Add auth token to auth check
    useEffect(() => {
        if (authState === AuthState.Unauthenticated) {
            navigate("/login")
        }
    }, [authState, navigate]);

    const [data, setData] = useState(null);
    useEffect(() => {
        getData();
    }, [])

    const [categoryNames, setCategoryNames] = useState([]);
    const [categoryValues, setCategoryValues] = useState({});
    const [depositRatios, setDepositRatios] = useState({});
    const [logs, setLogs] = useState({});
    const [unusedLogs, setUnusedLogs] = useState({});

    const [categoryLogs, setCategoryLogs] = useState(null);
    const [categorySelectOptions, setCategorySelectOptions] = useState([]);

    useEffect(() => {
        updateDataComponents();
    }, [data]);

    async function updateDataComponents() {
        if (data) {
            setCategoryNames(data.categoryNames);
            setCategoryValues(data.categoryValues);
            setDepositRatios(data.depositRatios);
            setLogs(data.logs);
            setUnusedLogs(data.unusedLogs);
        }
    }

    //Update log list
    useEffect(() => {
        (async () => {
                const logList = await generateLogList();
                setCategoryLogs(logList);
        })()
    }, [logs]);

    async function generateLogList() {
        const logList = [];
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

    //Update select options
    useEffect(() => {
        if (Object.keys(categoryNames).length === 0) {
            setCategorySelectOptions([]);
        } else {
            let options = [];
            for (const categoryName of categoryNames) {
                let optionObject = { value: categoryName, label: categoryName }
                options.push(optionObject);
            }
            setCategorySelectOptions(options);
        }
    }, [categoryNames])

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
        const newData = {
            "categoryNames": categoryNames,
            "categoryValues": categoryValues,
            "depositRatios": depositRatios,
            "logs": logs,
            "unusedLogs": unusedLogs
        };
        setData(newData);
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
        if (ratioKey === "ratio") {
            const ratioName = utils.getValueFrom("category-splits", "key");
            if (ratioName in depositRatios) {
                return { key: ratioName, type: "ratio" };
            }
        }
        if (categoryNames.includes(ratioKey)) {
            return { key: ratioKey, type: "single" };
        }
        return null;
    }

    function depositToCategory(amount, categoryName, date, note) {
        setCategoryValues(prevValues => ({
            ...prevValues,
            [categoryName]: prevValues[categoryName] + amount
        }));
        //Add log
        //Add to action list for undo
    }

    async function deposit() {
        const amountValue = utils.getValueFrom("deposit-amount", "money");
        if (amountValue === null) {
            //ERROR
            console.log("AMOUNT ERROR");
            return;
        }
        const dateValue = utils.getValueFrom("deposit-date", "date");
        if (dateValue === null) {
            //ERROR
            console.log("DATE ERROR");
            return;
        }
        const noteValue = utils.getValueFrom("deposit-note", "note");
        if (noteValue === null) {
            //ERROR
            console.log("NOTE ERROR");
            return;
        }
        const ratioObject = getDepositRatio();
        if (ratioObject === null) {
            //ERROR
            console.log("RATIO ERROR");
            return;
        }
        const ratioKey = ratioObject.key;
        const ratioType = ratioObject.type;

        if (ratioType === "single") {
            depositToCategory(amountValue, ratioKey, dateValue, noteValue);
        } else if (ratioType === "ratio") {
            let remainingAmount = amountValue;
            let depositAmounts = {};
            for (const [category, ratio] of Object.entries(depositRatios[ratioKey])) {
                const categoryAmount = Math.floor(amountValue * ratio / 10000);
                depositAmounts[category] = categoryAmount;
                remainingAmount -= categoryAmount;
            }
            if (remainingAmount !== 0) {
                for (const [category, amount] of Object.entries(depositAmounts)) {
                    if (amount !== 0) {
                        depositAmounts[category] += remainingAmount;
                        break;
                    }
                }
            }
            for (const [category, amount] of Object.entries(depositAmounts)) {
                depositToCategory(amount, category, dateValue, noteValue);
            }
        }
    }

    return (
        <main>
            <ActionBar undo={undo} redo={redo} save={save} onLogout={onLogout} userName={userName}/>
            {/* Main div */}
            <div className="container d-flex flex-column flex-sm-row justify-content-between">
                {/* Control panel */}
                <CarouselMenu controlTitle="Control Type" numberOfPages={4}>
                    <Carousel.Item key={0}>
                        <DepositControls depositFunction={deposit} selectOptions={categorySelectOptions}/>
                    </Carousel.Item>

                    <Carousel.Item key={1}>
                        <WithdrawControls selectOptions={categorySelectOptions}/>
                    </Carousel.Item>

                    <Carousel.Item key={2}>
                        <TransferControls selectOptions={categorySelectOptions}/>
                    </Carousel.Item>

                    <Carousel.Item key={3}>
                        <CategoryControls selectOptions={categorySelectOptions}/>
                    </Carousel.Item>
                </CarouselMenu>

                {/* Category breakdown */}
                <CategoryBreakdown categoryNames={categoryNames} categoryValues={categoryValues}/>

                {/* Logs */}
                <CarouselMenu controlTitle="Category Logs" numberOfPages={4}>
                    {categoryLogs}
                </CarouselMenu>
            </div>
        </main>
    );
}