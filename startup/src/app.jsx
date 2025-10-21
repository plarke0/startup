import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink, Link, Route, Routes, useLocation } from 'react-router-dom';
import { About } from './about/about';
import { Home } from './home/home';
import { BudgetCenter } from './budget-center/budget-center';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { AuthState } from './auth/authState';
import { LockedContent } from './auth/lockedContent';

function PageMeta() {
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

function ReactiveNavLink({ destination, title }) {
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

function Header({ authState }) {
    return (
        <div className="container d-flex flex-column flex-sm-row justify-content-between align-items-center border-bottom mb-3">
            <Link to="" className="mb-1 text-dark text-decoration-none">
                <h1>Plarke.net</h1>
            </Link>
            <menu className="nav mb-1 justify-content-center">
                <ReactiveNavLink destination= "" title= "Home"/>
                <LockedContent currentState={authState} requiredState={AuthState.Authenticated}>
                    <ReactiveNavLink destination= "budget-center" title= "Budget Center"/>
                </LockedContent>
                <ReactiveNavLink destination= "login" title= "Login"/>
                <ReactiveNavLink destination= "signup" title= "Signup"/>
                <ReactiveNavLink destination= "about" title= "About"/>
            </menu>
        </div>
    );
}

function Footer() {
    return (
        <div className="container">
            <footer className="row justify-content-between border-top mt-3">
                <span className="col text-start mt-2"><p>Preston Clarke</p></span>
                <span className="col text-end mt-2"><a href="https://github.com/plarke0/startup" className="text-decoration-none link-dark">GitHub</a></span>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous"></script>
            </footer>
        </div>
    );
}

function NotFound() {
  return <main className="container-fluid text-center">404: Return to sender. Address unknown.</main>;
}

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    return (
        <BrowserRouter>
            <PageMeta/>
            <Header authState={authState}/>

            <Routes>
                <Route path='/' element={<Home />} exact />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={
                    <Login
                        userName={userName}
                        authState={authState}
                        onAuthChange={(userName, authState) => {
                            setAuthState(authState);
                            setUserName(userName);
                        }}
                    />}
                />
                <Route path='/signup' element={
                    <Signup
                        userName={userName}
                        authState={authState}
                        onAuthChange={(userName, authState) => {
                            setAuthState(authState);
                            setUserName(userName);
                        }}
                    />}
                />
                <Route path='/budget-center' element={<BudgetCenter authState={authState} />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}