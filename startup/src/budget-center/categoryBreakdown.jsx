import React, { useState, useEffect } from "react";
import SVGChart from "./svgChart";


export default function CategoryBreakdown({ categoryNames, categoryValues }) {
    function stringifyMoney(value) {
        const valueString = (Math.abs(value)/100).toFixed(2);
        if (value < 0) {
            return `-$${valueString}`;
        } else {
            return `$${valueString}`;
        }
    }

    const [total, setTotal] = useState(0);
    const [categoryEntries, setCategoryEntries] = useState([]);

    useEffect(() => {
        let newCategoryEntries = [];
        let newTotal = 0;
        
        if (categoryNames.length > 0) {
            const valuesList = Object.entries(categoryValues).sort((a, b) => b[1] - a[1]);
            for (const categoryPair of valuesList) {
                let category = categoryPair[0];
                let value = categoryPair[1];
                newCategoryEntries.push(`${category}: ${stringifyMoney(value)}`);
                newTotal += value;
            }
            setTotal(newTotal);
            setCategoryEntries(newCategoryEntries);
        } else {
            newCategoryEntries.push('No Categories');
            setTotal(0);
            setCategoryEntries(newCategoryEntries);
        }
    }, [categoryNames, categoryValues]);

    return (
        <div className="d-flex flex-column justify-content-start align-items-center w-100 mb-2">
            <h4>Category Breakdown</h4>

            <SVGChart
                total={total}
                categoryValues={categoryValues}
            />

            <div className="card col-11 col-lg-8 col-xl-6">
                <div className="card-header text-center">
                    <h5>Categories:</h5>
                </div>
                <ul className="list-group list-group-flush">
                    {categoryEntries.map((entry) => <li className="list-group-item">{entry}</li>)}
                </ul>
            </div>
        </div>
    );
}