import React, { useState } from "react";

//TODO: make functional and animate
//*https://stackoverflow.com/questions/59921845/math-to-create-svg-pie-chart-without-using-css-or-js

export default function SVGChart({ categoryValues, total }) {
    const strokeWidth = 30;
    const svgWidth = 230;
    const svgHeight = 230;
    const chartRadius = 115;
    const colorPalette = [
        "#3EB680",
        "#8ED8B7",
        "#6B8CEF",
        "#69B8F4",
        "#C899F4",
        "#BECFF6",
        "#DEBA02",
        "#FDE35A",
        "#B6BEC7"
    ];

    function stringifyMoney(value) {
        const valueString = (Math.abs(value)/100).toFixed(2);
        if (value < 0) {
            return `-$${valueString}`;
        } else {
            return `$${valueString}`;
        }
    }

    function generateArcData(arcNumber, arcPercentage, elapsedPercentage) {

    }

    return (
        <svg width={svgWidth} height={svgHeight}>
            <path
                fill="none" stroke={colorPalette[0]} strokeWidth={strokeWidth}
                d="M 115 115 A 90 90 0 1 1 -57.85088487178855 -68.943999880708"
            ></path>
            <text fill="#000000" fontSize="40" fontFamily="Monospace" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">{stringifyMoney(total)}</text>
        </svg>
    );
}