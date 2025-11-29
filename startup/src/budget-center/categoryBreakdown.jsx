import React from "react";
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

    const categoryEntries = [];
    let total = 0;
    
    if (categoryNames.length > 0) {
        for (const category of categoryNames) {
            let value = categoryValues[category];
            categoryEntries.push(`${category}: ${stringifyMoney(value)}`);
            total += value;
        }
    } else {
        categoryEntries.push('No Categories');
        total = 0;
    }

    return (
        <div className="d-flex flex-column justify-content-start align-items-center w-100 mb-2">
            <h4>Category Breakdown</h4>

            <SVGChart total={total}/>

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