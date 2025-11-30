import React, { useState, useEffect } from "react";

//TODO: make functional and animate
//*https://stackoverflow.com/questions/59921845/math-to-create-svg-pie-chart-without-using-css-or-js

export default function SVGChart({ categoryValues, total }) {
    const strokeWidth = 30;
    const svgWidth = 230;
    const svgHeight = 230;
    const chartRadius = 80;
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

    const [chartArcs, setChartArcs] = useState([]);

    useEffect(() => {
        if (total !== 0 && categoryValues && typeof categoryValues === "object") {
            const newArcs = getChartArcs();
            setChartArcs(newArcs);
        }
    }, [categoryValues, total]);

    function stringifyMoney(value) {
        const valueString = (Math.abs(value)/100).toFixed(2);
        if (value < 0) {
            return `-$${valueString}`;
        } else {
            return `$${valueString}`;
        }
    }

    function getChartArcs() {
        const valuesList = Object.entries(categoryValues).sort((a, b) => b[1] - a[1]);
        let arcList = [];
        let arcNumber = 0;
        let elapsedPercentage = 0;
        for (const valueDatum of valuesList) {
            const value = valueDatum[1];
            if (value <= 0) {
                continue
            }
            const arcPercent = value / total;
            arcList.push(generateArcData(arcNumber, arcPercent, elapsedPercentage));
            arcNumber ++;
            elapsedPercentage += arcPercent;
        }
        return arcList;
    }

    function generateArcData(arcNumber, arcPercentage, elapsedPercentage) {
        const finalColorIndex = colorPalette.length - 1;
        let arcData = {};
        if (arcNumber < finalColorIndex) {
            arcData["color"] = colorPalette[arcNumber];
        } else {
            arcData["color"] = colorPalette[finalColorIndex];
        }

        const xOffset = svgWidth / 2;
        const yOffset = svgHeight / 2;

        const arcStart = elapsedPercentage * 2 * Math.PI;
        const arcEnd = arcStart + arcPercentage * 2 * Math.PI;

        arcData["startX"] = Math.cos(arcStart) * chartRadius + xOffset;
        arcData["startY"] = yOffset - Math.sin(arcStart) * chartRadius;
        arcData["endX"] = Math.cos(arcEnd) * chartRadius + xOffset;
        arcData["endY"] = yOffset - Math.sin(arcEnd) * chartRadius;

        arcData["isLargeArc"] = arcPercentage > 0.5 ? 1 : 0;

        return arcData;
    }

    return (
        <svg width={svgWidth} height={svgHeight}>
            {chartArcs.map((arc) => 
                <path
                    fill="none" stroke={arc.color} strokeWidth={strokeWidth}
                    d={`M ${arc.startX} ${arc.startY} A ${chartRadius} ${chartRadius} 0 ${arc.isLargeArc} 0 ${arc.endX} ${arc.endY}`}
                ></path>
            )}
            <text fill="#000000" fontSize="40" fontFamily="Monospace" x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">{stringifyMoney(total)}</text>
        </svg>
    );
}