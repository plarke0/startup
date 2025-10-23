import React from 'react';
import { NavLink } from "react-router-dom";


export default function ReactiveNavLink({ destination, title }) {
    return (
        <li className="nav-item">
            <NavLink className={({ isActive }) => 
                `nav-link link-${isActive ? "secondary" : "dark"}`
                }
                to={destination}
            >
                {title}
            </NavLink>
        </li>
    );
}