import React from "react";


//TODO: make scrollable

export default function CategoryLog({ logName, logContent }) {
    const logEntries = [];

    if (logContent) {
        for (const entry of logContent) {
            logEntries.push();
        }
    }

    return (
        <div>
            <div className="card-header text-center">
                <h4>{logName}</h4>
            </div>
            {/* Log entries */}
            <ul className="list-group list-group-flush">
                {logEntries}
            </ul>
        </div>
    );
}