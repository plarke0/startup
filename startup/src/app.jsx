import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <div className="container d-flex flex-column flex-sm-row justify-content-between align-items-center border-bottom mb-3">
            <a href="index.html" className="mb-1 text-dark text-decoration-none">
                <h1>Plarke.net</h1>
            </a>
            <menu className="nav mb-1 justify-content-center">
                <li><a href="index.html" className="nav-link link-secondary">Home</a></li>
                <li><a href="budget.html" className="nav-link link-dark">Budget Center</a></li>
                <li><a href="login.html" className="nav-link link-dark">Login</a></li>
                <li><a href="signup.html" className="nav-link link-dark">Signup</a></li>
                <li><a href="about.html" className="nav-link link-dark">About</a></li>
            </menu>
        </div>
    );
}

function Footer() {
    return (
        <div className="container">
            <footer className="row justify-content-between border-top mt-1">
                <span className="col text-start mt-2"><p>Preston Clarke</p></span>
                <span className="col text-end mt-2"><a href="https://github.com/plarke0/startup" className="text-decoration-none link-dark">GitHub</a></span>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
            </footer>
        </div>
    );
}

export default function App() {
  return (
    <div>
        <Header />
        <main>
            
        </main>
        <Footer />
    </div>
  );
}