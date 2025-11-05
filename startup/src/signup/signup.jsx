import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthState } from '../auth/authState';
import FormCard from '../component-templates/formCard';


export default function Signup({ user, authState, onAuthChange }) {
    const [userName, setUserName] = React.useState(user);
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (authState === AuthState.Authenticated) {
            navigate("/budget-center")
        }
    }, [authState, navigate]);

    useEffect(() => {
        //TODO: Generalize to accept where the error occurs, make an error file.
        if (password !== confirmPassword) {
            setError("Passwords must match.");
        } else if (displayError !== false) {
            setError(false);
        }
    }, [userName, password, confirmPassword]);

    async function usernameContainsProfanity(username) {
        try {
            const response = await fetch(`https://www.purgomalum.com/service/containsprofanity?text=${username}`);
            return response.json();
        } catch (error) {
            console.log("ERROR");
            return false;
        }
    }

    async function createUser() {
        const containsProfanity = await usernameContainsProfanity(userName);
        if (containsProfanity === true) {
            //TODO: Modify for generalization
            await setError("Username contains profanity.");
        };
        if (!displayError && !containsProfanity) {
            localStorage.setItem("userName", userName);
            onAuthChange(userName, AuthState.Authenticated);
        }
    }

    async function setError(message) {
        setDisplayError(message);
    }

    return (
        <main>
            <FormCard>
                <form className="px-3 py-3">
                    <aside className="mb-2">
                        Note: I will call an api to filter inappropriate usernames here.
                    </aside>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username:</label>
                        <input id="username" type="text" placeholder="Username" className="form-control" onChange={(e) => setUserName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input id="password" type="password" placeholder="Password" className="form-control" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirm-password" className="form-label">Confirm Password:</label>
                        <input id="confirm-password" type="password" placeholder="Password" className={`form-control${displayError ? " is-invalid" : ""}`} onChange={(e) => setConfirmPassword(e.target.value)}/>
                        <small id="confirm-password-error" className={`text-danger${!displayError ? " d-none" : ""}`}>
                            {displayError}
                        </small>
                    </div>
                    <div className="mb-3">
                        <div className="form-check">
                            <input id="remember-me" type="checkbox" className="form-check-input"/>
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                    </div>
                    <Button
                        variant="primary"
                        id="sign-up"
                        onClick={() => createUser()}
                        disabled={!userName || !password || !confirmPassword}
                    >
                        Sign Up
                    </Button>
                </form>
                <span>Already have an account? <Link to="../login">Log in</Link></span>
            </FormCard>
        </main>
    );
}