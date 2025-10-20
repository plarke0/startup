import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export function Signup() {
    return (
        <main>
            <div className="container d-flex justify-content-center">
                <div className="card col-12 col-sm-6 col-xl-4">
                    <div className="card-body">
                        <form className="px-3 py-3">
                            <aside className="mb-2">
                                Note: I will call an api to filter inappropriate usernames here.
                            </aside>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username:</label>
                                <input id="username" type="text" placeholder="Username" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password:</label>
                                <input id="password" type="password" placeholder="Password" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirm-password" className="form-label">Confirm Password:</label>
                                <input id="confirm-password" type="password" placeholder="Password" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <div className="form-check">
                                    <input id="remember-me" type="checkbox" className="form-check-input"/>
                                    <label htmlFor="remember-me">Remember me</label>
                                </div>
                            </div>
                            <Button varient="primary" id="sign-up" onClick={() => console.log("Sign up")}>Sign Up</Button>
                        </form>
                        <span>Already have an account? <Link to="../login">Log in</Link></span>
                    </div>
                </div>
            </div>
        </main>
    );
}