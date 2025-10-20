import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

//TODO: Fix button functionality
//TODO: Change <a> to NavLink

export function Login() {
    return (
        <main>
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
                        <span>Don't have an account? <NavLink className="link" to="../signup">Sign up</NavLink></span>
                    </div>
                </div>
            </div>
        </main>
    );
}