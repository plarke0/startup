import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthState } from '../auth/authState';
import FormCard from '../templates/formCard';


export function Login({ user, authState, onAuthChange }) {
    const [userName, setUserName] = React.useState(user);
    const [password, setPassword] = React.useState('');
    const [remember, setRemember] = React.useState(false);
    const [displayError, setDisplayError] = React.useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (authState === AuthState.Authenticated) {
            navigate("/budget-center")
        }
    }, [authState, navigate]);

    async function loginUser() {
        localStorage.setItem("userName", userName);
        onAuthChange(userName, AuthState.Authenticated);
    }

    return (
        <main>
            <FormCard>
                <form className="px-3 py-3">
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username:</label>
                        <input id="username" type="text" placeholder="Username" className="form-control" onChange={(e) => setUserName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input id="password" type="password" placeholder="Password" className="form-control" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <div className="form-check">
                            <input id="remember-me" type="checkbox" className="form-check-input" onChange={(e) => setRemember(e.target.checked)}/>
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                    </div>
                    <Button
                        variant="primary"
                        id="log-in"
                        onClick={() => console.log(remember)}
                        disabled={!userName || !password}
                    >
                        Log In
                    </Button>
                </form>
                <span>Don't have an account? <Link className="link" to="../signup">Sign up</Link></span>
            </FormCard>
        </main>
    );
}