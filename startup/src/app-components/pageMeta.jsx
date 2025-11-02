import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

export default function PageMeta() {
    const location = useLocation();

    const metaMap = {
        "/": {
            title: "Plarke.net",
            icon: "/icons/plarke-icon.ico"
        },
        "/about": {
            title: "Plarke.net | About",
            icon: "/icons/plarke-icon.ico"
        },
        "/login": {
            title: "Plarke.net | Login",
            icon: "/icons/plarke-icon.ico"
        },
        "/signup": {
            title: "Plarke.net | Signup",
            icon: "/icons/plarke-icon.ico"
        },
        "/budget-center": {
            title: "Budget Center",
            icon: "/icons/plarke-icon.ico"
        },
    }

    useEffect(() => {
        const meta = metaMap[location.pathname] || {
            title: "Default",
            icon: "/icons/favicon.ico",
        };

        document.title = meta.title;
        const link = document.querySelector("link[rel~='icon']");
        if (link) link.href = meta.icon;

    },[location]);

    return null;
}