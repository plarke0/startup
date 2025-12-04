import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { UserNotifier } from "./userNotifier";


export default function ActionBar({ undo, redo, save, onLogout, userName }) {
    const [totalUsers, setTotalUsers] = useState(0);
    const [activeUsers, setActiveUsers] = useState(0);


    useEffect(() => {
        UserNotifier.addHandler(updateUserCounts);
        UserNotifier.getMostRecent();

        return () => {
            UserNotifier.removeHandler(updateUserCounts);
        };
    }, []);

    function updateUserCounts(data) {
        setTotalUsers(data.totalUsers);
        setActiveUsers(data.activeUsers);
    }

    return (
        <div className="container d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between border-bottom mb-2">
            <div className="d-flex col-sm-5 justify-content-center justify-content-sm-start order-0">
                <Button variant="link" onClick={() => undo()} className="text-decoration-none link-dark">Undo</Button>
                <Button variant="link" onClick={() => redo()} className="text-decoration-none link-dark">Redo</Button>
                <Button variant="link" onClick={() => save()} className="text-decoration-none text-success link-dark">Save</Button>
                <Button variant="link" onClick={() => onLogout()} className="text-decoration-none text-danger link-dark">Log Out</Button>
            </div>
            <div id="username" className="d-flex justify-content-center order-last order-sm-1">
                <b className="h4">{userName}</b>
            </div>
            <div className="d-flex col-sm-5 justify-content-center justify-content-sm-end order-2">
                {/* Live user count through websocket */}
                <div className="mx-2">Total users: <span id="total-users">{totalUsers}</span></div>
                <div className="mx-2">Active now: <span id="active-users">{activeUsers}</span></div>
            </div>
        </div>
    );
}