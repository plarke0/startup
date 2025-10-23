import React, { useState } from "react";

//TODO: make functional and animate
//*https://stackoverflow.com/questions/59921845/math-to-create-svg-pie-chart-without-using-css-or-js

export default function SVGChart({ total }) {
    function stringifyMoney(value) {
        const valueString = (Math.abs(value)/100).toFixed(2);
        if (value < 0) {
            return `-$${valueString}`;
        } else {
            return `$${valueString}`;
        }
    }

    return (
        <svg width="230" height="230">
            <circle cx="110" cy="110" r="80" stroke="green" strokeWidth="40" fill="#ffffff"/>
            <text fill="#000000" fontSize="40" justify="center" fontFamily="Monospace" x="40" y="125">{stringifyMoney(total)}</text>
        </svg>
    );
}