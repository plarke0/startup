import React from "react";
import LogEntry from "./logEntry";


//TODO: make scrollable

export default function CategoryLog({ logName, logContent }) {
    const logEntries = [];

    if (logContent.length > 0) {
        for (const entry of logContent) {
            logEntries.unshift(
                <LogEntry
                    date={entry.date}
                    delta={entry.delta}
                    newAmount={entry.newAmount}
                    note={entry.note}
                />
            );
        }
    } else {
        logEntries.unshift(
            <LogEntry
                date="mm/dd/yy"
                delta={0}
                newAmount={0}
                note="No entries"
            />
        );
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