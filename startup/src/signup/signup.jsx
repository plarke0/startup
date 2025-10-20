import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthState } from '../auth/authState';
import FormCard from '../templates/formCard';


export function Signup({ authState }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (authState === AuthState.Authenticated) {
            navigate("/budget-center")
        }
    }, [authState, navigate]);

    return (
        <main>
            <link rel="icon" href="/public/plarke-icon.ico"/>
            <FormCard>
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
            </FormCard>
        </main>
    );
}