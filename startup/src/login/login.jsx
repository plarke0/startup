import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthState } from '../auth/authState';
import FormCard from '../component-templates/formCard';


export default function Login({ user, authState, onAuthChange }) {
    const [userName, setUserName] = React.useState(user);
    const [password, setPassword] = React.useState('');
    const [remember, setRemember] = React.useState(false);
    const [displayError, setDisplayError] = React.useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (authState === AuthState.Authenticated) {
            navigate("/budget-center")
        }
    }, [authState, navigate]);

    async function loginUser() {
        if (!displayError) {
            const response = await fetch("api/auth/login", {
                method: "post",
                body: JSON.stringify({ email: userName, password: password }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
            if (response?.status === 200) {
                localStorage.setItem("userName", userName);
                onAuthChange(userName, AuthState.Authenticated);
            } else {
                const body = await response.json();
                //TODO: Error handling
                console.log("BAD LOGIN");
            }
        }
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
                        onClick={() => loginUser()}
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