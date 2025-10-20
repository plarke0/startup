import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthState } from '../auth/authState';


export function Login({ authState }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (authState === AuthState.Authenticated) {
            navigate("/budget-center")
        }
    }, [authState, navigate]);

    return (
        <main>
            <link rel="icon" href="/public/plarke-icon.ico"/>
            <div className="container d-flex justify-content-center">
                <div className="card col-12 col-sm-6 col-xl-4">
                    <div className="card-body">
                        <form className="px-3 py-3">
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username:</label>
                                <input id="username" type="text" placeholder="Username" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password:</label>
                                <input id="password" type="password" placeholder="Password" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <div className="form-check">
                                    <input id="remember-me" type="checkbox" className="form-check-input"/>
                                    <label htmlFor="remember-me">Remember me</label>
                                </div>
                            </div>
                            <Button varient="primary" id="log-in" onClick={() => console.log("Login")}>Log In</Button>
                        </form>
                        <span>Don't have an account? <Link className="link" to="../signup">Sign up</Link></span>
                    </div>
                </div>
            </div>
        </main>
    );
}