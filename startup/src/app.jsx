import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { About } from './about/about';
import { Home } from './home/home';
import { BudgetCenter } from './budget-center/budget-center';
import { Login } from './login/login';
import { Signup } from './signup/signup';

function Header() {
    return (
        <div className="container d-flex flex-column flex-sm-row justify-content-between align-items-center border-bottom mb-3">
            <a href="index.html" className="mb-1 text-dark text-decoration-none">
                <h1>Plarke.net</h1>
            </a>
            <menu className="nav mb-1 justify-content-center">
                <li className="nav-item">
                    <NavLink className="nav-link link-secondary" to="">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link link-dark" to="budget-center">Budget Center</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link link-dark" to="login">Login</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link link-dark" to="signup">Signup</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link link-dark" to="about">About</NavLink>
                </li>
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
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
            </footer>
        </div>
    );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}

export default function App() {
  return (
    <BrowserRouter>
        <Header />

        <main></main>

        <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/budget-center' element={<BudgetCenter />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

        <Footer />
    </BrowserRouter>
  );
}