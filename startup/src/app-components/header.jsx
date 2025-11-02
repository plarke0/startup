import React from 'react';
import { Link } from "react-router-dom";
import { AuthState } from '../auth/authState';
import LockedContent from "../component-templates/lockedContent";
import ReactiveNavLink from "./reactiveNavLink";


export default function Header({ authState }) {
    return (
        <div className="container d-flex flex-column flex-sm-row justify-content-between align-items-center border-bottom mb-3">
            <Link to="" className="mb-1 text-dark text-decoration-none">
                <h1>Plarke.net</h1>
            </Link>
            <menu className="nav mb-1 justify-content-center">
                <ReactiveNavLink destination= "" title= "Home"/>
                <LockedContent currentState={authState} requiredState={AuthState.Authenticated}>
                    <ReactiveNavLink destination= "budget-center" title= "Budget Center"/>
                </LockedContent>
                <ReactiveNavLink destination= "login" title= "Login"/>
                <ReactiveNavLink destination= "signup" title= "Signup"/>
                <ReactiveNavLink destination= "about" title= "About"/>
            </menu>
        </div>
    );
}