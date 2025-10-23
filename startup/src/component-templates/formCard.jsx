import React from "react";

export default function FormCard({ children }) {
    return (
        <div className="container d-flex justify-content-center">
            <div className="card col-12 col-sm-6 col-xl-4">
                <div className="card-body">
                    {children}
                </div>
            </div>
        </div>
    );
}