import React from "react";
import SVGChart from "./svgChart";


export default function CategoryBreakdown() {
    return (
        <div className="d-flex flex-column justify-content-start align-items-center w-100 mb-2">
            <h4>Category Breakdown</h4>

            <SVGChart/>

            <div className="card col-11 col-lg-8 col-xl-6">
                <div className="card-header text-center">
                    <h5>Categories:</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Tithing: $0.00</li>
                    <li className="list-group-item">Savings: $0.00</li>
                    <li className="list-group-item">Fun: $0.00</li>
                </ul>
            </div>
        </div>
    );
}